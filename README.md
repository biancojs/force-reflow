# bianco.force-reflow

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Usage

```js
import forceReflow from 'bianco.force-reflow'

// force the reflow on a single element
forceReflow(document.querySelector('#my-id'))
```

[travis-image]: https://img.shields.io/travis/biancojs/force-reflow.svg?style=flat-square

[travis-url]: https://travis-ci.org/biancojs/force-reflow

[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[license-url]: LICENSE.txt

[npm-version-image]: http://img.shields.io/npm/v/bianco.force-reflow.svg?style=flat-square

[npm-downloads-image]: http://img.shields.io/npm/dm/bianco.force-reflow.svg?style=flat-square

[npm-url]: https://npmjs.org/package/bianco.force-reflow

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [forceReflow](#forcereflow)
    -   [Parameters](#parameters)
    -   [Examples](#examples)

### forceReflow

Force the reflow of one or a list of DOM elements

#### Parameters

-   `el` **([HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) \| [NodeList](https://developer.mozilla.org/docs/Web/API/NodeList) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** single or multiple DOM elements

#### Examples

```javascript
import forceReflow from 'bianco.force-reflow'

// force reflow on a list of elements
forceReflow(document.querySelectorAll('.list'))

// force reflow on a single element
forceReflow(document.querySelector('.post'))
```

Returns **any** the argument received
