import {merge} from 'lodash-es';
import {button} from './templates';
import DomElement from './DomElement';
import defaults, {CLASSNAME_TOGGLED} from './defaults';
import NewsletterModal from './NewsletterModal';
import NewsletterValidator from './NewsletterValidator';

import '../css/bootstrapped.scss';

let modalInstance = null;

export default class extends DomElement {
    constructor(element, options = {}) {
        options = merge({}, defaults, options);

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
        this.getElement().innerHTML = button(this.getOptions('buttons').open);

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
