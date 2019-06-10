"use strict";
const alfy = require('alfy');
const language = require('./languages.js');
const Configstore = require('configstore');

const q = alfy.input;

const config = q.split('>');

const config = new Configstore('language-config-pair');
var originSource = config.get('source') ? config.get('source') : 'default';
var originTarget = config.get('target') ? config.get('target') : 'default';

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
  config.set('source', currentSource);
  config.set('target', currentTarget);
  items.push({
    title: `language config success, current: ${currentSource}>${currentTarget}`,
    subtitle: `original: ${originSource}>${originTarget}`
  });
}

alfy.output(items);