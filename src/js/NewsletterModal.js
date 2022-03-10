import {form, spinner, subscribed} from './templates';
import DomElement from './DomElement';
import {CLASSNAME_BTN_SUBMIT} from './defaults';

export default class NewsletterModal extends DomElement {
    constructor(element, options = {}, validator) {
        super(element, options);

        this.validator = validator;

        this._render();
    }

    /**
     * Instantiate the base element, which will hold the form.
     * @return {HTMLDivElement}
     */
    static createElement() {
        const el = document.createElement('div');

        el.className = 'nws-modal modal';

        return el;
    }

    /**
     * Create the form and bind its events.
     * @return void
     * @private
     */
    _render() {
        this.getElement().innerHTML = form(this.getOptions());

        document.body.appendChild(this.getElement());

        this.toggle(true);

        this.on('submit', this._handleSubmit)
            .on('click', this._handleClose)
            .on('keyup', this._handleClose, document.body);

        if (this.hasElement('.nws-gdpr-btn')) {
            this.on('click', this._toggleGdpr, this.getElement('.nws-gdpr-btn'));
        }
    }

    /**
     * Close the form modal.
     * @param {MouseEvent} e
     * @private
     */
    _handleClose(e) {
        const toggledClass = this.getOptions('classes').toggled,
            clickedWrapper = e.target.classList.contains(toggledClass),
            clickedButton = e.target.classList.contains('close'),
            pressedEscape = e.key === 'Escape';

        if (clickedWrapper || pressedEscape || clickedButton) {
            e.preventDefault();
            this.toggle(false);
        }
    }

    /**
     * Validate the data and display messages accordingly.
     * @param {MouseEvent} e
     * @private
     */
    _handleSubmit(e) {
        e.preventDefault();

        this._setLoading(true)
            ._clearMessage();

        const form = this.getElement('form');

        if (!this.validator.validate(form)) {
            this._setLoading(false);
            return;
        }

        this._submit(this.validator.getData())
            .then(r => {
                return this._message(r.json, r.response.ok, r.response)
                    ._setLoading(false)
                    .remove(this.getElement('.' + CLASSNAME_BTN_SUBMIT));
            })
            .catch(error => {
                this._message(error, false)
                    ._setLoading(false);
            });
    }

    /**
     * Send the data to the server.
     * @param {object} data
     * @return {Promise<Response>}
     * @private
     */
    _submit(data) {
        let response;

        return window.fetch(this.getOptions('url'), {
            method: 'POST',
            headers: Object.assign(this.getOptions('headers'), {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data)
        }).then(r => {
            response = r;
            return r.json();
        }).then(json => {
            return {json, response};
        });
    }

    /**
     * Show the user the request is being made.
     * @param {boolean} state
     * @return {NewsletterModal}
     * @private
     */
    _setLoading(state) {
        const btn = this.getElement('.nws-btn-submit');

        if (state) {
            btn.innerHTML = spinner();
        } else {
            btn.innerHTML = this.getOptions('buttons').submit.label;
        }

        return this;
    }

    /**
     * Show an error or success message in the form.
     * @param {object} body
     * @param {boolean} success
     * @param {Response} response
     * @return {NewsletterModal}
     * @private
     */
    _message(body, success, response) {
        let options = this.getOptions('messages'),
            msg = options.parse(body);

        if (typeof msg !== 'string') {
            msg = success ? options.subscribed : response.statusText;
        }

        if (success) {
            this.getElement('.modal-body').innerHTML = subscribed(msg);

            return this;
        }

        const el = this.getElement('.nws-msg');

        el.className += ' text-danger';
        el.textContent = msg;
        el.style.display = 'block';

        return this;
    }

    /**
     * Hide the message element.
     * @return {NewsletterModal}
     * @private
     */
    _clearMessage() {
        this.getElement('.nws-msg').style.display = 'none';

        return this;
    }

    /**
     * Hide or show the GDPR disclaimer.
     * @return void
     * @private
     */
    _toggleGdpr(e) {
        e.preventDefault();

        const notice = this.getElement('.nws-gdpr-txt');

        if (notice.classList.toggle('toggled')) {
            notice.style.height = notice.firstElementChild.clientHeight + 'px';
        } else {
            notice.style.height = '0';
        }
    }
}
