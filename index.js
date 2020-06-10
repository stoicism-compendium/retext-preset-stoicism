'use strict'

exports.plugins = [
  // Keep these sorted alphabetically.
  [require('retext-spell'), {dictionary: require('dictionary-en')}],
  require('retext-contractions'),
  require('retext-diacritics'),
  require('retext-indefinite-article'),
  require('retext-quotes'),
  require('retext-redundant-acronyms'),
  require('retext-repeated-words'),
  require('retext-sentence-spacing'),
]
