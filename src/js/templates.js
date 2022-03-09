/**
 * Base newsletter subscription modal.
 * @param {object} options
 * @return string HTML
 */
import {CLASSNAME_BTN_SUBMIT, INPUT_NAME_CHECK, INPUT_NAME_EMAIL, INPUT_NAME_FIRST, INPUT_NAME_LAST} from './defaults';

export const form = (options) => `
<div class="modal-dialog modal-dialog-centered">
    <form class="modal-content" action="/" method="POST">
        <div class="modal-header">
            <h5 class="modal-title">${options.title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="pointer-events: none">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="nws-msg"></div>
${
    (options.fields.firstname ? firstName(options.fields.firstname) : '')
    + (options.fields.lastname ? lastName(options.fields.lastname) : '')
    + email(options.fields.email)
    + (options.fields.gdprCheckbox ? gdprCheckbox(options.fields.gdprCheckbox) : '')
}
        </div>
        <div class="modal-footer justify-content-between flex-wrap">
            ${options.fields.gdprNotice ? gdprNoticeLink(options.fields.gdprNotice) : '<span></span>'}
            <button type="submit" class="${options.buttons.submit.classes} ${CLASSNAME_BTN_SUBMIT}">${options.buttons.submit.label}</button>
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
<div class="nws-gdpr-check">
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
    if (!options.url && !options.text) {
        return '';
    }

    return `<a href="${options.url || '#'}"
               target="_blank"
               rel="noreferrer"
               class="${options.text ? 'nws-gdpr-btn' : ''}">${options.label} <span>🛈</span></a>`;
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
    <input type="email" name="${INPUT_NAME_EMAIL}" placeholder="Email" required autocomplete="email" class="form-control">
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
 * @param {object} options
 * @return string HTML
 */
export const button = (options = {}) =>
    `<button type="button" class="${options.classes}">${options.label}</button>`;

/**
 * Show the user the request is being send.
 * @return string HTML
 */
export const spinner = () => 'sending...';

/**
 * Success message after submitting form.
 * @param {string} msg
 * @return string HTML
 */
export const subscribed = (msg) => {
    return `
<div class="nws-msg-success py-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <h5 class="mt-3">${msg}</h5>
</div>
`;
};

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
