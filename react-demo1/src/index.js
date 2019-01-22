/*
* React 入口文件
* React 是 React 的核心库
* ReactDOM 是提供与 DOM 相关功能
* */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';  // css可以删掉
import App from './App';
// 提升react运行速度的js文件
import * as serviceWorker from './serviceWorker';

// 将 App 渲染到 root 里面
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
