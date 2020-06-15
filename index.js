'use strict'

exports.plugins = [
  // This is first.
  require('retext-english'),
  // Keep these sorted alphabetically.
  require('retext-contractions'),
  require('retext-diacritics'),
  require('retext-emoji'),
  require('retext-indefinite-article'),
  require('retext-quotes'),
  require('retext-redundant-acronyms'),
  require('retext-repeated-words'),
  require('retext-sentence-spacing'),
  require('retext-syntax-urls'),
  // This is last.
  [require('retext-spell-file'), {dictionary: require('dictionary-en')}],
]
