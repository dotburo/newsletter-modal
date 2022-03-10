export const INPUT_NAME_EMAIL = 'nws_email';
export const INPUT_NAME_CHECK = 'nws_gdpr';
export const INPUT_NAME_FIRST = 'nws_first';
export const INPUT_NAME_LAST = 'nws_last';

export const CLASSNAME_TOGGLED = 'nws-toggled';
export const CLASSNAME_BTN_SUBMIT = 'nws-btn-submit';

export const DEFAULT_TITLE = 'Subscribe to our newsletter';

export default {
    url: null,
    headers: {},
    title: DEFAULT_TITLE,
    fields: {
        firstname: false,
        lastname: false,
        email: true,
        gdprCheckbox: false,
        gdprNotice: false,
    },
    buttons: {
        open: {
            label: 'Subscribe',
            classes: 'btn btn-primary',
        },
        submit: {
            label: 'Submit',
            classes: 'btn btn-primary'
        }
    },
    messages: {
        subscribed: 'Thank you for subscribing!',
        parse: () => null
    },
};
