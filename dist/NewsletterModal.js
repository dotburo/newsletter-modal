/*! @dotburo/newsletter-modal 1.0.0 | dotburo <code@dotburo.org> !*/
/**
 * @param {object} options
 * @return string HTML
 */
const form = (options) => `
<div class="nws-modal">
    <div class="nws-msg"></div>
    <form class="nws-form" action="#" method="post">
        ${options.nameFields ? names(options.nameFields) : ''}

        ${email()}

        ${options.gdprNotice ? gdpr(options.gdprNotice) : ''}

        <div class="row nws-row-submit">
            <button type="submit" class="btn btn-primary">${options.submitButtonText}</button>
        </div>
    </form>
</div>
`;

/**
 * @param {object} options
 * @return string HTML
 */
const gdpr = (options) => `
<div class="row nws-gdpr-closed">
    <div class="nws-gdpr-title">
        <span>${options.title}</span>
        <span>toggle</span>
    </div>
    <div class="nws-gdpr-body">${options.body}</div>
</div>
`;

/**
 * @param {string} label
 * @return string HTML
 */
const email = (label = 'Email') => `
<div class="row nws-row-email">
    <label>
        <span>${label}</span>
        <input type="email" name="email" placeholder="Email" required autocomplete="email">
   </label>
</div>
`;

/**
 * @param {object} options
 * @return string HTML
 */
const names = (options = {}) => `
<div class="row nws-row-first-name">
    <label>
        <span>${options.firstNameLabel || 'First name'}</span>
        <input type="text" name="first_name" placeholder="${options.firstNamePlaceholder || ''}" required>
   </label>
</div>
<div class="row nws-row-last-name">
    <label>
        <span>${options.lastNameLabel || 'Last name'}</span>
        <input type="text" name="last_name" placeholder="${options.lastNamePlaceholder || ''}" required>
   </label>
</div>
`;

/**
 * @param {string} label
 * @return string HTML
 */
const button = (label = 'Subscribe') => `
<button type="button">${label}</button>
`;

/**
 * @return string HTML
 */
const spinner = () => 'sending...';

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
        this._options = Object.assign({}, DEFAULTS, options);

        this._toggled = false;

        this._events = [];

        this._el = this._setElement(element);

        this.toggle(options.toggled);
    }

    /**
     * Display or hide element by adding or removing the classname.
     * @param {Boolean|undefined} state
     * @return DomElement
     */
    toggle(state = undefined) {
        let classList = this._el.classList;

        if (state !== undefined) {
            classList[state ? 'add' : 'remove'](this.getOptions('classes').toggled);

            this._toggled = state;

            return this;
        }

        this._toggled = classList.toggle(this.getOptions('classes').toggled);

        return this;
    }

    /**
     * Bind a (delegated) event
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

var defaults = {
    url: null,
    submitButtonText: 'Submit',
    successMessage: 'Success!',
    nameFields: false,
    gdprNotice: {
        title: 'GDPR notice',
        body: 'explained',
    },
    classes: {
        toggled: 'nws-toggled'
    }
};

class NewsletterModal extends DomElement {
    constructor(element, options = {}) {
        super(element, options);

        this._render();
    }

    static createElement(classes = '') {
        const el = document.createElement('div');

        el.className = 'nws-wrap ' + classes;

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

let modalInstance = null;

class NewsletterButton extends DomElement {
    constructor(element, options = {}) {
        options = Object.assign({}, defaults, options);

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
            modalInstance.show();
            return;
        }

        modalInstance = new NewsletterModal(
            NewsletterModal.createElement(this.getOptions('classes').wrap),
            this.getOptions()
        );
    }
}

export { NewsletterButton as default };
//# sourceMappingURL=NewsletterModal.js.map
