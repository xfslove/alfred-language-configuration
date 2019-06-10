"use strict";
const alfy = require('alfy');
const language = require('./languages.js');
const Configstore = require('configstore');

const q = alfy.input;

const config = q.split('>');

const store = new Configstore('language-config-pair');
var originSource = store.get('source') ? store.get('source') : 'default';
var originTarget = store.get('target') ? store.get('target') : 'default';

var currentSource = language.getCode(config[0]);
var currentTarget = language.getCode(config[1]);

var items = [];
if (!currentSource) {
  items.push({
    title: `language config failure, config format: source>target`,
    subtitle: `source language [${config[0]}] not supported`
  });
} else if (!currentTarget) {
  items.push({
    title: `language config failure, config format: source>target`,
    subtitle: `target language [${config[1]}] not supported`
  });
} else {
  store.set('source', currentSource);
  store.set('target', currentTarget);
  items.push({
    title: `language config success, current: ${currentSource}>${currentTarget}`,
    subtitle: `original: ${originSource}>${originTarget}`
  });
}

alfy.output(items);