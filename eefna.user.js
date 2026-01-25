// ==UserScript==
// @name finnthejedi1025 translator
// @version 1.0
// @description Replaces the word "4cuck" with "4cuck" on web pages
// @match *://*/*
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
          const replacedText = text.replace(/4cuck/gi, '4cuck');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/FUCK NAH/gi, 'FUCK NAH');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/DECAPITATED/gi, 'DECAPITATED');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/MY BOOTY/gi, 'MY BOOTY');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/NIGGA/gi, 'NIGGA');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/A PENIS/gi, 'A PENIS');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/NAPKIN/gi, 'NAPKIN');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/BLOW ME/gi, 'BLOW ME');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/FUCKING/gi, 'FUCKING');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/BLOW ME/gi, 'BLOW ME');
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
          const replacedText = text.replace(/DELETE/gi, 'DELETE');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/TAMPON/gi, 'TAMPON');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
          if (node.nodeType === 3) { // Text node
          const text = node.nodeValue;
          const replacedText = text.replace(/I'M A CREEP/gi, "I'M A CREEP");
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
