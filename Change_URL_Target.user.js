// ==UserScript==
// @name        Change URL Target
// @namespace   ChangeURLTarget
// @description Change URL Target
// @include     http://link.freemoviesub.com/*;http://*.zonakimochi.me/*
// @version     1
// @grant       Allow Pasting
// ==/UserScript==
var a = document.getElementsByTagName("a");
    for (i=0; i<a.length; i++)
        if (a[i].target == "_blank")
            a[i].target = "_self";