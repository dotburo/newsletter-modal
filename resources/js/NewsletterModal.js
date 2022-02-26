import {form, spinner} from './templates';
import DomElement from './DomElement';

export default class NewsletterModal extends DomElement {
    constructor(element, options = {}) {
        super(element, options);

        this._render();
    }

    static createElement() {
        const el = document.createElement('div');

        el.className = 'nws-wrap modal';

        return el;
    }

    _render() {
        this.getElement().innerHTML = form(this.getOptions());

        document.body.appendChild(this.getElement());

        this.toggle(true);

        this.on('submit', this._handleSubmit)
            .on('click', this._handleClose, this.getElement('nws-btn-close'));
    }

    _handleClose(e) {
        e.preventDefault();

        this.toggle(false);
    }

    _handleSubmit(e) {
        e.preventDefault();

        this._setLoading(true);

        this._submit()
            .then(response => {
                if (response.ok) {
                    return this._message(this.getOptions('successMessage'));
                }

                throw new Error(response.statusText);
            })
            .catch(error => {
                this._message(error.message)
                    ._setLoading(false);
            });
    }

    _submit() {
        let value = this._el.querySelector('input[type=email]').value,
            token = this._el.querySelector('input[name=_token]').value;

        return window.fetch(this.getOptions('url'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify({
                email: value,
                _token: token
            })
        });
    }

    _setLoading(state) {
        const btn = this.getElement('nws-btn-submit');

        if (state) {
            btn.innerHTML = spinner();
        } else {
            btn.innerHTML = this.getOptions('submitButtonText');
        }

        return this;
    }

    _message(msg) {
        this.getElement('nws-msg').textContent = msg;

        return this;
    }
}
