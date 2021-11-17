# Newsletter modal

Vanilla Javascript modal for newsletter forms.

### Basic usage

```js
import NewsletterModal from 'NewsletterModal'

elements = nodeListArray(elements);

elements.forEach(el => {
    new NewsletterModal(el, {
        url: '/api/v1/newsletter'
    });
})
```

## Testing

```bash
npm run test
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
