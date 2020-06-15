# retext-preset-stoicism

<!-- Badges -->

![tests][tests-badge]

<!-- Brief description -->

> Text processor for the Stoicism Compendium.

This is a [**retext**][retext] [preset][] defining a number of
[warnings](#warnings).

<!-- Sections -->

## Installing and Configuring

The following instructions describe one way of using this package with
[**npm**][npm].

1. Install this package as a [development dependency][npm-dependencies]:

   ```sh
   npm install --save-dev retext-preset-stoicism
   ```

## Warnings

Each of the following plugins is configured to emit warnings for the issue
mentioned: <!-- sorted alphabetically -->

* [retext-contractions][] – incorrect apostrophes in contractions
* [retext-diacritics][] – incorrect diacritics
* [retext-indefinite-article][] – incorrect indefinite articles
* [retext-quotes][] – “straight” instead of “smart” quotes and apostrophes
* [retext-redundant-acronyms][] – redundant acronyms
* [retext-repeated-words][] – repeated words
* [retext-sentence-spacing][] – number of spaces between sentences ≠ 1

## License

[Blue Oak Model License 1.0.0][license] © [Sean Leather][author]

<!-- Definitions, sorted alphabetically -->

[author]: https://github.com/spl
[license]: ./license.md
[npm-dependencies]: https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
[npm]: https://docs.npmjs.com/cli/install
[preset]: https://github.com/unifiedjs/unified#preset
[retext-contractions]: https://github.com/retextjs/retext-contractions
[retext-diacritics]: https://github.com/retextjs/retext-diacritics
[retext-indefinite-article]: https://github.com/retextjs/retext-indefinite-article
[retext-quotes]: https://github.com/retextjs/retext-quotes
[retext-redundant-acronyms]: https://github.com/retextjs/retext-redundant-acronyms
[retext-repeated-words]: https://github.com/retextjs/retext-repeated-words
[retext-sentence-spacing]: https://github.com/retextjs/retext-sentence-spacing
[retext]: https://github.com/retextjs/retext
[tests-badge]: https://github.com/stoicism-compendium/retext-preset-stoicism/workflows/tests/badge.svg
