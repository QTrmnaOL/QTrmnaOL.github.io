// ==UserScript==
// @name         AutoTrimpsV2+genBTC-GraphsOnly
// @namespace    https://github.com/genbtc/AutoTrimps-betadev
// @version      2.1.5.2-genbtc-12-23-2016+Modular
// @description  Graphs Module (only) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var script = document.createElement('script');
script.id = 'AutoTrimps-script';
script.src = 'https://genbtc.github.io/AutoTrimps-betadev/Graphs.js';
document.head.appendChild(script);