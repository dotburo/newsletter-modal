/**
 * Base newsletter subscription modal.
 * @param {object} options
 * @return string HTML
 */
import {INPUT_NAME_CHECK, INPUT_NAME_EMAIL, INPUT_NAME_FIRST, INPUT_NAME_LAST} from './defaults';

export const form = (options) => `
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
export const button = (label = 'Subscribe', title = '') => `
<aside class="nws-cta">
    ${title ? `<h1>${title}</h1>`: ''}
    <button type="button" class="btn btn-primary">${label}</button>
</aside>
`;

/**
 * Show the user the request is being send.
 * @return string HTML
 */
export const spinner = () => 'sending...';

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
