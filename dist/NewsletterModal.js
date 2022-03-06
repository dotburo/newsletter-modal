/*! @dotburo/newsletter-modal 0.3.2 | dotburo <code@dotburo.org> (https://dotburo.org) !*/
var defaults = {
    url: null,
    headers: {},
    fields: {
        firstname: false,
        lastname: false,
        email: true,
        gdprCheckbox: false,
        gdprNotice: false,
    },
    submitButtonText: 'Submit',
    successMessage: 'Success!',
};

const INPUT_NAME_EMAIL = 'nws_email';
const INPUT_NAME_CHECK = 'nws_gdpr';
const INPUT_NAME_FIRST = 'nws_first';
const INPUT_NAME_LAST = 'nws_last';

/**
 * Base newsletter subscription modal.
 * @param {object} options
 * @return string HTML
 */

const form = (options) => `
<div class="modal-dialog modal-dialog-centered">
    <form class="modal-content" action="/" method="POST">
        <div class="modal-header">
            <h5 class="modal-title">${options.title ? options.title : 'Subscribe to our newsletter'}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="pointer-events: none">&times;</span>
            </button>
        </div>
        <div class="modal-body">
${
    (options.fields.firstname ? firstName(options.fields.firstname) : '')
    + (options.fields.lastname ? lastName(options.fields.lastname) : '')
    + email(options.fields.email)
    + (options.fields.gdprCheckbox ? gdprCheckbox(options.fields.gdprCheckbox) : '')
}
        </div>
        <div class="modal-footer justify-content-between flex-wrap">
            ${options.fields.gdprNotice ? gdprNoticeLink(options.fields.gdprNotice) : '<span></span>'}
            <button type="submit" class="btn btn-primary nws-btn-submit">${options.submitButtonText}</button>
            ${options.fields.gdprNotice ? gdprNoticeText(options.fields.gdprNotice) : ''}
        </div>
    </form>
</div>
`;

/**
 * Explicit agreement checkbox for GDPR.
 * @param {object} options
 * @return string HTML
 */
const gdprCheckbox = (options) => `
<div>
    <input type="checkbox" id="nws-gdpr-check" name="${INPUT_NAME_CHECK}" required>
    <label for="nws-gdpr-check">${options.label}</label>
    <span class="invalid-feedback">${options.invalid || 'This is required.'}</span>
</div>
`;

/**
 * A link to a privacy policy page or a button to toggle the GDPR disclaimer in the modal's footer.
 * @param {object} options
 * @return string HTML
 */
const gdprNoticeLink = (options) => {
    if (options.url) {
        return `<a href="${options.url}" target="_blank" rel="noreferrer">${options.label}</a>`;
    }

    if (options.text) {
        return `<a href="#" class="nws-gdpr-btn">${options.label} <span>🛈</span></a>`;
    }

    return '';
};

/**
 * A collapsible GDPR disclaimer in the modal's footer.
 * @param {object} options
 * @return string HTML
 */
const gdprNoticeText = (options) => `
<div class="nws-flex-break"></div>
<div class="nws-gdpr-txt">
    <div class="nws-gdpr-txt-inner">${options.text}</div>
</div>
`;

/**
 * Default required email field.
 * @param {object} options
 * @return string HTML
 */
const email = (options = {}) => `
<label class="${!options.label ? 'sr-only' : ''}">${options.label || 'Email'}</label>
<div class="input-group">
    ${options.icon ? inputGroupIcon(options.icon) : ''}
    <input type="email" name="${INPUT_NAME_EMAIL}" placeholder="Email" required autocomplete="email" class="form-control" value="a@a.com">
    <div class="invalid-feedback">${options.invalid || 'Please provide a valid email address.'}</div>
</div>
`;

/**
 * First name field.
 * @param {object} options
 * @return string HTML
 */
const firstName = (options = {}) => `
<label class="${!options.label ? 'sr-only' : ''}">${options.label || 'First name'}</label>
<div class="input-group">
    ${options.icon ? inputGroupIcon(options.icon) : ''}
    <input type="text" name="${INPUT_NAME_FIRST}" placeholder="${options.placeholder || 'First name'}" required class="form-control">
    <div class="invalid-feedback">${options.invalid || 'Please provide a valid first name.'}</div>
</div>
`;

/**
 * Last name field.
 * @param {object} options
 * @return string HTML
 */
const lastName = (options = {}) => `
<label class="${!options.label ? 'sr-only' : ''}">${options.label || 'Last name'}</label>
<div class="input-group">
    ${options.icon ? inputGroupIcon(options.icon) : ''}
    <input type="text" name="${INPUT_NAME_LAST}" placeholder="${options.placeholder || 'Last name'}" required class="form-control">
    <div class="invalid-feedback">${options.invalid || 'Please provide a valid last name.'}</div>
</div>
`;

/**
 * The button to toggle the modal.
 * @param {string} label
 * @param {string} title
 * @return string HTML
 */
const button = (label = 'Subscribe', title = '') => `
<aside class="nws-cta">
    ${title ? `<h1>${title}</h1>`: ''}
    <button type="button" class="btn btn-primary">${label}</button>
</aside>
`;

/**
 * Show the user the request is being send.
 * @return string HTML
 */
const spinner = () => 'sending...';

/**
 * HTML for prepending an icon to an input field.
 * @param {string} icon
 * @return string HTML
 */
const inputGroupIcon = icon => {
    return `
<div class="input-group-prepend">
  <div class="input-group-text ${icon}"></div>
</div>
`;
};

const
    d = document,
    DEFAULTS = {
        toggled: false,
        classes: {
            toggled: 'toggled'
        }
    };

class DomElement {
    constructor(element, options = {}) {
        this._options = options = Object.assign({}, DEFAULTS, options);

        this._toggled = false;

        this._events = [];

        this._el = this._setElement(element);

        if (options.toggled) {
            this.toggle(true);
        }
    }

    /**
     * Display or hide element by adding or removing the classname.
     * @param {Boolean|undefined} state
     * @return DomElement
     */
    toggle(state = undefined) {
        let classname = this.getOptions('classes').toggled;

        this._toggled = state !== undefined ? state : !this._toggled;

        this._el.classList[this._toggled ? 'add' : 'remove'](classname);

        return this;
    }

    /**
     * Bind a (delegated) event.
     * @param {String} event
     * @param {Function} fn
     * @param {HTMLElement|Document} el
     * @return DomElement
     */
    on(event, fn, el = null) {
        (el || this._el).addEventListener(event, fn = fn.bind(this), true);

        this._events.push({
            name: event,
            fn: fn,
            el: el
        });

        return this;
    }

    /**
     * Return the main wrapping element.
     * @return {Element}
     */
    getElement(selector = '') {
        return !selector ? this._el : this._el.querySelector(selector);
    }

    /**
     * Check if the root element has child one.
     * @return {Boolean}
     */
    hasElement(selector) {
        return !!this._el.querySelector(selector);
    }

    /**
     * Return the options.
     * @param {string|null} key
     * @return {object}
     */
    getOptions(key = null) {
        return !key ? this._options : this._options[key];
    }

    /**
     * Unbind all events and nullify references
     * @return void
     */
    remove() {
        this._events = this._events.filter(event => {
            return (event.el || this._el).removeEventListener(event.name, event.fn, true);
        });

        this._el.parentNode.removeChild(this._el);

        this._el = null;

        this._options = DEFAULTS;
    }

    /**
     * Query the element in the DOM if its a string
     * @param {Element|String} el
     * @return {Element|null}
     * @protected
     */
    _setElement(el) {
        if (!el || (!el.nodeType && typeof el !== 'string')) {
            throw new Error('Wrong element type provided!');
        }

        if (el.nodeType) return el;

        return (this._options.parent || d).querySelector(el);
    }

    /**
     * Communicate changes
     * @param {String} name
     * @param {Object|null} detail
     * @protected
     */
    _trigger(name, detail = null) {
        let event;

        if (typeof CustomEvent === 'function') {
            event = new CustomEvent(name, {
                detail: detail,
                bubbles: true,
                cancelable: true
            });
        } else {
            event = d.createEvent('CustomEvent');
            event.initCustomEvent(name, true, true, detail);
        }

        this._el.dispatchEvent(event);
    }
}

class NewsletterModal extends DomElement {
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

        if (this.hasElement('.nws-gdpr-txt')) {
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

        this._setLoading(true);

        const form = this.getElement('form');

        if (!this.validator.validate(form)) {
            this._setLoading(false);
            return;
        }

        this._submit(this.validator.getData())
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

    /**
     * Send the data to the server.
     * @param {object} data
     * @return {Promise<Response>}
     * @private
     */
    _submit(data) {
        return window.fetch(this.getOptions('url'), {
            method: 'POST',
            headers: Object.assign(this.getOptions('headers'), {
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data)
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
            btn.innerHTML = this.getOptions('submitButtonText');
        }

        return this;
    }

    /**
     * Show an error or success message in the form.
     * @param {string} msg
     * @return {NewsletterModal}
     * @private
     */
    _message(msg) {
        this.getElement('.nws-msg').textContent = msg;

        return this;
    }

    /**
     * Hide or show the GDPR disclaimer.
     * @return void
     * @private
     */
    _toggleGdpr() {
        const notice = this.getElement('.nws-gdpr-txt');

        if (notice.classList.toggle('toggled')) {
            notice.style.height = notice.firstElementChild.clientHeight + 'px';
        } else {
            notice.style.height = '0';
        }
    }
}

class NewsletterValidator {
    constructor() {
        this.validationMap = {
            [INPUT_NAME_EMAIL]: this._validateEmail.bind(this),
            [INPUT_NAME_CHECK]: this._validateGdprCheck.bind(this),
            [INPUT_NAME_FIRST]: this._validateName.bind(this),
            [INPUT_NAME_LAST]: this._validateName.bind(this),
        };

        this._data = {};
    }

    /**
     * Validate all element of the given form.
     * @param {HTMLFormElement} form
     * @return {boolean}
     */
    validate(form) {
        const elements = form.elements;

        let valid = true;

        for(let i = 0, l = elements.length, element; i < l; i++) {
            element = elements.item(i);
            if (element.name) {
                valid = this.validationMap[element.name](element);
            }
        }

        return valid;
    }

    /**
     * Validate the email.
     * @param {HTMLInputElement} element
     * @return {boolean}
     * @private
     */
    _validateEmail(element) {
        const valid = /^.*@.*..*/.test(element.value);

        if (valid) {
            this._setData(element.name, element.value);
        }

        this._setElement(element, valid);

        return valid;
    }

    /**
     * Validate the first or last name.
     * @param {HTMLInputElement} element
     * @return {boolean}
     * @private
     */
    _validateName(element) {
        const valid = !element.value.match(/\d/g);

        if (valid) {
            this._setData(element.name, element.value);
        }

        this._setElement(element, valid);

        return valid;
    }

    /**
     * Make sure the GDPR checkbox is checked.
     * @param {HTMLInputElement} element
     * @return {boolean}
     * @private
     */
    _validateGdprCheck(element) {
        const valid = element.checked;

        if (valid) {
            this._setData(element.name, true);
        }

        this._setElement(element, valid);

        return valid;
    }

    _setElement(element, state) {
        element.classList[state ? 'remove' : 'add']('is-invalid');
    }

    /**
     * Store the valid data.
     * @param {string} key
     * @param {*} value
     * @private
     */
    _setData(key, value) {
        this._data[key] = value;
    }

    /**
     * Return the valid data.
     * @return {{}}
     */
    getData() {
        return this._data;
    }
}

const CLASSNAME_TOGGLED = 'nws-toggled';

let modalInstance = null;

class NewsletterButton extends DomElement {
    constructor(element, options = {}) {
        options = Object.assign({}, defaults, options);

        options.fields = options.fields || {};
        options.classes = options.classes || {};
        options.classes.toggled = CLASSNAME_TOGGLED;

        super(element, options);

        this._render();
    }

    /**
     * Render the button to open the modal.
     * @protected
     */
    _render() {
        this.getElement().innerHTML = button();

        this.on('click', this._handleSubscribeButton);
    }

    /**
     * Instantiate and/or toggle the modal.
     * @return void
     * @protected
     */
    _handleSubscribeButton() {
        if (modalInstance) {
            modalInstance.toggle(true);
            return;
        }

        modalInstance = new NewsletterModal(
            NewsletterModal.createElement(),
            this.getOptions(),
            new NewsletterValidator()
        );
    }
}

export { NewsletterButton as default };
//# sourceMappingURL=NewsletterModal.js.map
