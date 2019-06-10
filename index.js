"use strict";
const alfy = require('alfy');
const language = require('./languages.js');
const configstore = require('configstore');

const q = alfy.input;

const config = q.split('>');

const languagePair = new configstore('language-config-pair');
var originSource = languagePair.get('source') || 'default';
var originTarget = languagePair.get('target') || 'default';

var currentSource = language.getCode(config[0]);
var currentTarget = language.getCode(config[1]);

var items = [];
if (!currentSource) {
  items.push({
    title: `language config failure, config format: source>target`,
    subtitle: `source language [${config[0]}] not supported, Press shift to see full support languages.`,
    quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
    icon: {
      path: 'warn.png'
    }
  });
} else if (!currentTarget) {
  items.push({
    title: `language config failure, config format: source>target`,
    subtitle: `target language [${config[1]}] not supported, Press shift to see full support languages.`,
    quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
    icon: {
      path: 'warn.png'
    }
  });
} else {
  languagePair.set('source', currentSource);
  languagePair.set('target', currentTarget);
  items.push({
    title: `language config success, [${currentSource}>${currentTarget}]`,
    subtitle: `change [${originSource}>${originTarget}] to [${currentSource}>${currentTarget}]`
  });
}

alfy.output(items);