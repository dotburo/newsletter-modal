/**
 * @param {object} options
 * @return string HTML
 */
export const form = (options) => `
<div class="nws-modal modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="nws-msg"></div>
        <form class="nws-form" action="#" method="post">
            ${options.nameFields ? names(options.nameFields) : ''}

            ${email()}

            ${options.gdprNotice ? gdpr(options.gdprNotice) : ''}

            <div class="row">
                <button type="submit" class="btn btn-primary nws-btn-submit">${options.submitButtonText}</button>
            </div>
        </form>
    </div>
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
 * @param {string} title
 * @return string HTML
 */
export const button = (label = 'Subscribe', title = '') => `
<aside class="nws-cta">
    ${title ? `<h1>${title}</h1>`: ''}
    <button type="button" class="btn btn-primary nws-cta-button">${label}</button>
</aside>
`;

/**
 * @return string HTML
 */
export const spinner = () => 'sending...';
