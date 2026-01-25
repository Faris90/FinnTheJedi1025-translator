// ==UserScript==
// @name finnthejedi1025 translator
// @version 1.0
// @description Helps you understand our little buddy better
// @match *://*.deviantart.com/*
// @grant none
// ==/UserScript==

(function() {
  'use strict';

  const findAndReplace = () => {
    const elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      for (let j = 0; j < element.childNodes.length; j++) {
        const node = element.childNodes[j];
 if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/BIUBIES/gi, 'BOOBIES');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
        if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/biubies/gi, 'boobies');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/EEFNA/gi, 'FUCK NAH');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/DANECTAITED/gi, 'DECAPITATED');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
        if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/FIORKEF/gi, 'FIREFOX');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/GATUTI/gi, 'MY BOOTY');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/NAGGI/gi, 'NIGGA');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/APINA/gi, 'A PENIS');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/NAKPI/gi, 'NAPKIN');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/FOKEV/gi, 'FUCKING');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/BLORKA/gi, 'BLOW ME');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/IMBECILE/gi, 'IMBECILE');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/FANK/gi, 'DONUT');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
        if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/OPSTIT/gi, "OP's TITS");
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/AMNACREPE/gi, "I'M A CREEP");
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  };



 setTimeout(function(){ findAndReplace();},100); // Initial replacement

  // Perform replacement on page updates
  const observer = new MutationObserver(findAndReplace);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
})();
