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
