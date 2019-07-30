"use strict";
const alfy = require('alfy');
const language = require('./languages.js');
const configstore = require('configstore');
const languagePair = new configstore('language-config-pair');

const q = alfy.input;

var items = [];
if (q === 'ls') {
    var pair = 'Not';
    if (languagePair.get('pair')) {
        pair = languagePair.get('pair').join('&');
    } else if (languagePair.get('source') && languagePair.get('target')) {
        pair = `${languagePair.get('source')}>${languagePair.get('target')}`;
    }
    items.push({
        title: `Current, [${pair}] assigned.`
    });
} else if (q.indexOf('>') === -1 && q.indexOf('&') === -1) {
    items.push({
        title: `Failure, must contain \'>\' or\' &\'`,
        subtitle: `configuration format: source>target or first one&the second.`,
        icon: {
            path: alfy.icon.error
        }
    });
} else if (q.indexOf('>') !== -1 && q.indexOf('&') !== -1) {
    items.push({
        title: `Failure, \'>\' or \'&\' must contain only one.`,
        subtitle: `configuration format: source>target or first one&the second.`,
        icon: {
            path: alfy.icon.error
        }
    });
} else if (q.indexOf('>') === -1) {
    // auto
    var pair = q.split('&');
    if (pair.length !== 2) {
        items.push({
            title: `Failure, \'&\' must contain only one.`,
            subtitle: `configuration format: first one&the second.`,
            icon: {
                path: alfy.icon.error
            }
        });
    } else {
        var pair0 = language.getCode(pair[0]);
        var pair1 = language.getCode(pair[1]);

        if (!pair0 && !pair1) {
            items.push({
                title: `Failure, first[${pair[0]}] and second[${pair[1]}] languages not supported.`,
                subtitle: `Press shift to see full support languages.`,
                quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
                icon: {
                    path: alfy.icon.error
                }
            });
        } else if (!pair0) {
            items.push({
                title: `Failure, first[${pair[0]}] language not supported.`,
                subtitle: `Press shift to see full support languages.`,
                quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
                icon: {
                    path: alfy.icon.error
                }
            });
        } else if (!pair1) {
            items.push({
                title: `Failure, second[${pair[1]}] language not supported.`,
                subtitle: `Press shift to see full support languages.`,
                quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
                icon: {
                    path: alfy.icon.error
                }
            });
        } else {
            languagePair.delete('source');
            languagePair.delete('target');
            languagePair.set('pair', pair);
            items.push({
                title: `Success, [${q}] assigned.`
            });
        }
    }
} else {
    // manual
    var pair = q.split('>');
    if (pair.length !== 2) {
        items.push({
            title: `Failure, \'>\' must contain only one.`,
            subtitle: `configuration format: source>target or first one&the second.`,
            icon: {
                path: alfy.icon.error
            }
        });
    } else {
        var pair0 = language.getCode(pair[0]);
        var pair1 = language.getCode(pair[1]);

        if (!pair0 && !pair1) {
            items.push({
                title: `Failure, source[${pair[0]}] and target[${pair[1]}] languages not supported.`,
                subtitle: `Press shift to see full support languages.`,
                quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
                icon: {
                    path: alfy.icon.error
                }
            });
        } else if (!pair0) {
            items.push({
                title: `Failure, source[${pair[0]}] language not supported.`,
                subtitle: `Press shift to see full support languages.`,
                quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
                icon: {
                    path: alfy.icon.error
                }
            });
        } else if (!pair1) {
            items.push({
                title: `Failure, target[${pair[1]}] language not supported.`,
                subtitle: `Press shift to see full support languages.`,
                quicklookurl: 'https://github.com/xfslove/alfred-language-configuration#readme',
                icon: {
                    path: alfy.icon.error
                }
            });
        } else {
            languagePair.delete('pair');
            languagePair.set('source', pair0);
            languagePair.set('target', pair1);
            items.push({
                title: `Success, [${q}] assigned.`
            });
        }

    }
}

alfy.output(items);
