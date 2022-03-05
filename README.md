# Newsletter modal

Vanilla Javascript modal for newsletter forms.

## Installation
```
npm i @dotburo/newsletter-modal
```

## Usage
```js
import {nodeListArray} from '../src/js/helpers.js';
import NewsletterModal from '../dist/NewsletterModal.js';

const rootElements = document.getElementsByClassName('root-el');

nodeListArray(rootElements).forEach(el => {
    new NewsletterModal(el, {
        url: '/api/v1/newsletter'
    });
})
```

### Styling options
1. **If you are using Bootstrap and Sass**: just include the file `src/css/modal.scss` in your bundle.
2. If not, include the file `dist/bootstrapped.css` in your project.

## All options
```js
new NewsletterModal(el, {
    url: '/api/v1/newsletter',
    headers: {
        'X-CSRF-TOKEN': 'sdjfsldfj'
    },
    title: 'Subscribe to our newsletter',
    submitButtonText: 'Submit',
    fields: {
        email: {
            label: 'Email',
            placeholder: 'Email',
            icon: null,
            invalid: 'Please provide a valid email address.'
        },
        firstname: {
            label: 'First name',
            placeholder: 'first name',
            icon: null,
            invalid: 'Please provide a valid first name.'
        },
        lastname: {
            label: 'Last name',
            placeholder: 'Last name',
            icon: null,
            invalid: 'Please provide a valid last name.'
        },
        gdprCheckbox: {
            label: 'By subscribing to the newsletter I agree that data I provided will be stored by ...',
            invalid: 'This is required.'
        },
        gdprNotice: {
            label: 'Privacy notice',
            text: null,
            url: null
        }
    },
});
```

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing
Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities
Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits
- [dotburo](https://github.com/dotburo)
- [All Contributors](../../contributors)

## License
GNU General Public License (GPL). Please see the [license file](LICENSE.md) for more information.
