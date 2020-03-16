# alfred-language-configuration

[![NPM](https://nodei.co/npm/alfred-language-configuration.png)](https://nodei.co/npm/alfred-language-configuration/)

## Installation

*Requires the Alfred 3 or 4 [Powerpack](https://www.alfredapp.com/powerpack/), [Node.js](https://nodejs.org) 8+, and the original [alfred-google-translate](https://github.com/xfslove/alfred-google-translate) workflow.*

### With NPM
- Install the original workflow with `npm install -g alfred-google-translate`.
- Install this configuration workflow with `npm install -g alfred-language-configuration`.

### Manually
- Install the original [alfred-google-translate](https://github.com/xfslove/alfred-google-translate) workflow.
- Install this [alfred-language-configuration](https://github.com/xfslove/alfred-language-configuration/releases/tag/v1.0.3) workflow.

## Changelog
See [all past and current releases](https://github.com/xfslove/alfred-language-configuration/releases).

## Usage

- Assign a *source* and *target* langauge by either… (See [Supported Language List](#supported-language-list))
    - **Choosing a bi-directional langauge pair** which will auto-translate either direction using `trc [source language keyword]&[target language keyword]` (For example `trc en&zh-CN` will cause the translate workflow to autodetect the target language so `tr hello` will display a Chinese translation and `tr 你好` will display an English translation.).
    - ***OR*** by **Choosing a one-way translation pair** using `trc [source language keyword]>[target language keyword]` (For example `trc en>zh-CN` will cause the translate workflow to only translate from English to Chinese.).

- Get the current configuration with `trc ls`.

## Screenshots

![config2.png](media/config2.png)

![config.png](media/config.png)

![ls.png](media/ls.png)

## Supported Language List

| keyword  | language |
| --------- | ------- |
|af|Afrikaans|
|sq|Albanian|
|am|Amharic|
|ar|Arabic|
|hy|Armenian|
|az|Azerbaijani|
|eu|Basque|
|be|Belarusian|
|bn|Bengali|
|bs|Bosnian|
|bg|Bulgarian|
|ca|Catalan|
|ceb|Cebuano|
|ny|Chichewa|
|zh-CN|Chinese Simplified|
|zh-TW|Chinese Traditional|
|co|Corsican|
|hr|Croatian|
|cs|Czech|
|da|Danish|
|nl|Dutch|
|en|English|
|eo|Esperanto|
|et|Estonian|
|tl|Filipino|
|fi|Finnish|
|fr|French|
|fy|Frisian|
|gl|Galician|
|ka|Georgian|
|de|German|
|el|Greek|
|gu|Gujarati|
|ht|Haitian Creole|
|ha|Hausa|
|haw|Hawaiian|
|he|Hebrew|
|iw|Hebrew|
|hi|Hindi|
|hmn|Hmong|
|hu|Hungarian|
|is|Icelandic|
|ig|Igbo|
|id|Indonesian|
|ga|Irish|
|it|Italian|
|ja|Japanese|
|jw|Javanese|
|kn|Kannada|
|kk|Kazakh|
|km|Khmer|
|ko|Korean|
|ku|Kurdish (Kurmanji)|
|ky|Kyrgyz|
|lo|Lao|
|la|Latin|
|lv|Latvian|
|lt|Lithuanian|
|lb|Luxembourgish|
|mk|Macedonian|
|mg|Malagasy|
|ms|Malay|
|ml|Malayalam|
|mt|Maltese|
|mi|Maori|
|mr|Marathi|
|mn|Mongolian|
|my|Myanmar (Burmese)|
|ne|Nepali|
|no|Norwegian|
|ps|Pashto|
|fa|Persian|
|pl|Polish|
|pt|Portuguese|
|pa|Punjabi|
|ro|Romanian|
|ru|Russian|
|sm|Samoan|
|gd|Scots Gaelic|
|sr|Serbian|
|sr-Latn|Serbian Latin|
|st|Sesotho|
|sn|Shona|
|sd|Sindhi|
|si|Sinhala|
|sk|Slovak|
|sl|Slovenian|
|so|Somali|
|es|Spanish|
|su|Sundanese|
|sw|Swahili|
|sv|Swedish|
|tg|Tajik|
|ta|Tamil|
|te|Telugu|
|th|Thai|
|tr|Turkish|
|uk|Ukrainian|
|ur|Urdu|
|uz|Uzbek|
|vi|Vietnamese|
|cy|Welsh|
|xh|Xhosa|
|yi|Yiddish|
|yo|Yoruba|
|zu|Zulu|
