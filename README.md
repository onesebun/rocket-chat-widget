# rocket-chat-widget

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

``` sh
npm install rocket-chat-widget
// or
yarn add rocket-chat-widget
```

## Getting started

``` js
import * as React from 'react';
import ReactDOM from 'react-dom';
import RocketChatWidget from 'rocket-chat-widget'

function App() {
  return (
    <RocketChatWidget
      iframeSrc='http://localhost/channel/general'
      anchor='right'
      closeText='關閉'
    />
  );
}
```

## Demo

https://user-images.githubusercontent.com/23612161/171030050-58fec1b3-9c18-45f7-9a86-c4ebf24fd4d5.mov

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
