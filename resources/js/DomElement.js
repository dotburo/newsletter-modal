const
    d = document,
    DEFAULTS = {
        toggled: false,
        classes: {
            toggled: 'toggled'
        }
    };

export default class DomElement {
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
