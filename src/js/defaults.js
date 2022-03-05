export default {
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

export const INPUT_NAME_EMAIL = 'nws_email';
export const INPUT_NAME_CHECK = 'nws_gdpr';
export const INPUT_NAME_FIRST = 'nws_first';
export const INPUT_NAME_LAST = 'nws_last';
