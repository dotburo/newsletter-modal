import {INPUT_NAME_CHECK, INPUT_NAME_EMAIL, INPUT_NAME_FIRST, INPUT_NAME_LAST} from './defaults';

export default class {
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
