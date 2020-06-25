# retext-preset-stoicism

<!-- Badges -->

![test][test-badge]

<!-- Brief description -->

_**Text processor for the Stoicism Compendium.**_

This is a [**`retext`**][retext] [preset][] defining a number of warnings.

<details>
<summary><strong>These are the warnings.</strong></summary>

Each of the plugins is configured to emit a warning for the issue mentioned:

<!-- Keep these sorted alphabetically. -->

| Plugin                          | Issue                                                |
| ------------------------------- | ---------------------------------------------------- |
| [`retext-contractions`][]       | Incorrect apostrophes in contractions                |
| [`retext-diacritics`][]         | Incorrect diacritics                                 |
| [`retext-indefinite-article`][] | Incorrect indefinite articles                        |
| [`retext-quotes`][]             | “Straight” quotes and apostrophes instead of “smart” |
| [`retext-redundant-acronyms`][] | Redundant acronyms                                   |
| [`retext-repeated-words`][]     | Repeated words                                       |
| [`retext-sentence-spacing`][]   | Number of spaces between sentences ≠ 1               |

</details>

`retext-preset-stoicism` is used by [`remark-preset-stoicism`][] to check
Markdown text in the Stoicism Compendium.

<!-- Sections -->

## Prerequisites

In the following sections, we describe how to install `retext-preset-stoicism`
with [`npm`][npm-cli] and how to use it with [`remark`][remark-cli] to check
Markdown files.

Alternatives include [`yarn`][yarn] instead of `npm`.

## Installation

Install `retext-preset-stoicism` and other dependencies as a [development
dependency][npm-dependencies]:

```sh
npm install --save-dev \
  retext-preset-stoicism \
  remark-cli \
  remark-retext \
  unified
```

## Usage

### Configuration

Create a file called [`.remark.js`][unified-engine-config]:

```js
exports.plugins = [
  [
    require('remark-retext'),
    require('unified')().use(require('retext-preset-stoicism')),
  ]
]
```

See [`remark-preset-stoicism`][] for how `retext-preset-stoicism` is used along
with a number of other `remark` plugins and settings.

### Script

Define a [script][npm-run-script] in your `package.json` to run `remark` on your
Markdown files:

```json
"scripts": {
  "check-md": "remark --quiet --frail ."
}
```

Run the script with `npm run`:

```sh
npm run check-md
```

## License

[Blue Oak Model License 1.0.0][license] © [Sean Leather][author]

<!-- Definitions, sorted alphabetically -->

[`remark-preset-stoicism`]: https://github.com/stoicism-compendium/remark-preset-stoicism
[`retext-contractions`]: https://github.com/retextjs/retext-contractions
[`retext-diacritics`]: https://github.com/retextjs/retext-diacritics
[`retext-indefinite-article`]: https://github.com/retextjs/retext-indefinite-article
[`retext-quotes`]: https://github.com/retextjs/retext-quotes
[`retext-redundant-acronyms`]: https://github.com/retextjs/retext-redundant-acronyms
[`retext-repeated-words`]: https://github.com/retextjs/retext-repeated-words
[`retext-sentence-spacing`]: https://github.com/retextjs/retext-sentence-spacing
[author]: https://github.com/spl
[license]: ./license.md
[npm-cli]: https://docs.npmjs.com/cli/install
[npm-dependencies]: https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
[npm-run-script]: https://docs.npmjs.com/cli/run-script
[preset]: https://github.com/unifiedjs/unified#preset
[remark-cli]: https://github.com/remarkjs/remark/tree/main/packages/remark-cli
[retext]: https://github.com/retextjs/retext
[test-badge]: https://github.com/stoicism-compendium/retext-preset-stoicism/workflows/test/badge.svg
[unified-engine-config]: https://github.com/unifiedjs/unified-engine/blob/main/doc/configure.md
[yarn]: https://yarnpkg.com/
