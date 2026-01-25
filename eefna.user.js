// ==UserScript==
// @name finnthejedi1025 translator
// @namespace http://soyjak.party
// @version 1.0
// @description Replaces the word "4chan" with "4cuck" on web pages
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
          const replacedText = text.replace(/4chan/gi, '4cuck');
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
          const replacedText = text.replace(/BLORKA/gi, 'BLOW ME');
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

  const replaceImageURL = () => {
    if (window.location.hostname === '4cuck.org') {
      var images = document.getElementsByTagName('img');
      for (var i = 0; i < images.length; i++) {
        var img = images[i];
        var originalSrc = img.getAttribute('src');
        if (originalSrc && originalSrc.indexOf('//s.4cdn.org/image/fp/logo-transparent.png') !== -1) {
          var newSrc = originalSrc.replace('//s.4cdn.org/image/fp/logo-transparent.png', 'https://files.catbox.moe/ril2hr.png');
          img.setAttribute('src', newSrc);
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

  replaceImageURL(); // Replace image URL on 4cuck.org
})();
