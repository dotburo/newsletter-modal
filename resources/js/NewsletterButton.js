import {button} from './templates';
import DomElement from './DomElement';
import defaults from './defaults';
import NewsletterModal from './NewsletterModal';

let modalInstance = null;

export default class extends DomElement {
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
