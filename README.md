# rocket-chat-widget

<!-- [![Travis][build-badge]][build] -->
<!-- [![npm package][npm-badge]][npm] -->
<!-- [![Coveralls][coveralls-badge]][coveralls] -->
[![version](https://img.shields.io/npm/v/rocket-chat-widget.svg)]()
[![npm downloads](https://img.shields.io/npm/dt/rocket-chat-widget.svg?maxAge=2592000)](http://npmjs.com/package/rocket-chat-widget)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Demo

![2022-05-31 20 30 30](https://user-images.githubusercontent.com/23612161/171181234-e75cc251-5cd6-4a72-b106-118013b8de81.gif)

## rocket.chat iframe integration

https://developer.rocket.chat/rocket.chat/iframe-integration/adding-a-rocket.chat-chat-room-to-your-web-app

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

## Props

| name        | type      | default                                         | description                    |
|-------------|-----------|-------------------------------------------------|--------------------------------|
| iframeSrc   | String    |                                                 | 您的 rocket.chat 網址            |
| iframeTitle | String    | Rocket.chat                                     | iframe title 名稱               |
| anchor      | String    | right                                           | 抽屜方向（top,right,bottom,left）|
| tooltip     | String    | Chat                                            | tooltip 名稱                    |
| closeText   | String    | Close                                           | 抽屜關閉名稱                     |
| rootStyle   | Object    | { right: 10, bottom: 10, position: 'fixed' } | root 樣式                       |
| draggable   | Boolean   | false                                           | 是否可拖移                       |
| drawerWidth | Number    | 500                                             | 抽屜寬度                         |
| icon        | ReactNode | ChatIcon                                        | icon                           |
