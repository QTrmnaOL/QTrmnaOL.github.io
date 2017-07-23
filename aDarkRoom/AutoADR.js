// ==UserScript==
// @name         Auto-aDarkRoom v0.1
// @namespace    https://github.com/QTrmnaOL/
// @version      0.1 nonfunctional build
// @description  AutomADRion of "A Dark Room"
// @author       QTrmnaOL
// @include      *http://adarkroom.doublespeakgames.com/*
// @grant        none
// ==/UserScript==
//credits to genBTC. Refactoring code and structure of ADRv2 
// https://github.com/genbtc/ADR-betadev


//window.alert("script source loaded");
var ADRVersion = '0.1 ';


//mainLoop


var ADRscript = document.getElementById('AutoADR-script')
  , base = 'https://qtrmnaol.github.io/aDarkRoom/AutoADR.js'
  // No modules yet.
  , module = 'modules/'
  ;
if (ADRscript !== null) {
    //nothing yet.
}

function initializeADR() {
   //    document.head.appendChild(document.creADReElement('script')).src = base + 'Graphs.js';
   //Load modules:
 
   console.log('ADR v' + ADRVersion + ' Loaded!');    
}

function printChangelog() {
    tooltip('confirm', null, 'updADRe', '\
<br>12/23 v2.1.5.2\
<br><b><u>Report any bugs/problems please!</u></b>\
<br><a href="https://github.com/genbtc/ADR-betadev#current-feADRure-changes-by-genbtc" target="#">Read the 12/20 Changelog Here</a>\
<br><a href="https://github.com/genbtc/ADR-betadev/commits/gh-pages" target="#">Check the commit history</a> (if you care)\
', 'cancelTooltip()', 'Script UpdADRe Notice ' + ADRversion);
}

////////////////////////////////////////
//Main DELAY Loop///////////////////////
////////////////////////////////////////

//Magic Numbers/////////////////////////
var runInterval = 100;      //How often to loop through logic
var startupDelay = 2000;    //How long to wait for everything to load

setTimeout(delayStart, startupDelay);
function delayStart() {
    initializeADR();
    printChangelog();
    setTimeout(delayStartAgain, startupDelay);
}
function delayStartAgain(){
    setInterval(mainLoop, runInterval);
    setInterval(guiLoop, runInterval*10);
    updADReCustomButtons();
    //MODULESdefault = MODULES;
    //MODULESdefault = Object.assign({}, MODULES);
    MODULESdefault = JSON.parse(JSON.stringify(MODULES));
}

////////////////////////////////////////
//Global Main vars /////////////////////
////////////////////////////////////////


var ADRdebug = true;
var enableconsole.log = true; //Spam console
var ADRrunning;


////////////////////////////////////////
//Main LOGIC Loop///////////////////////
////////////////////////////////////////
////////////////////////////////////////
function mainLoop() {
    if (ADRrunning == false) return;
    ADRrunning = true;

    //EXECUTE CORE LOGIC
     document.getElementById('deny').click();
     document.getElementById('build_hut.button').click();
     
    
    //Runs any user provided scripts - by copying and pasting a function named userscripts() into the Chrome Dev console. (F12)
    //if (userscriptOn) userscripts();
    //rinse, repeat
    return;
}
