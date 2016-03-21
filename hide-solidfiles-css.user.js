// ==UserScript==
// @name        Solidfile Hide CSS
// @namespace   SolidfileHideCss
// @description Hide CSS
// @include     http://*.solidfiles.com/*
// @version     1
// @grant       Allow Pasting
// ==/UserScript==
var css = 'img,  #header, .bnr, .player-wrap, a .btn-success, .social {display:none;} .dl h1 {color: #ccc;}',
head = document.head || document.getElementsByTagName('head') [0],
style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
