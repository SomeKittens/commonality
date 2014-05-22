/**
 * Displays the most commonly used words in a given textarea
 * @license MIT
 * @Copyright 2014 Randall Koutnik
 */

var commonality = function(textId, resultsId) {
  'use strict';
  var text = document.getElementById(textId)
    , results = document.getElementById(resultsId);

  text.addEventListener('change', function() {
    var words = text.value.toLowerCase()
      .split(/\s/).replace(/\]\(/, ' ').replace(/[*_\[\)/, '')
      .filter(function(a) {return a.length > 2;})
      , wordMap = {}
      , i, l;

    for (i = 0, l = words.length; i < l; i++) {
      var currentWord = words[i];
      if (wordMap[currentWord]) {
        wordMap[currentWord]++;
      } else {
        wordMap[currentWord] = 1;
      }
    }

    var wordArray = [];

    Object.keys(wordMap).forEach(function(key) {
      wordArray.push([key, wordMap[key]]);
    });

    wordArray.sort(function(a, b) {
      return b[1] - a[1];
    });

    while (results.hasChildNodes()) {
      results.removeChild(results.lastChild);
    }

    for (i = 0; i < 5 && i < wordArray.length; i++) {
      var templ = document.createElement('tr')
        , wordNode = document.createElement('td')
        , numberNode = document.createElement('td');

      wordNode.textContent = wordArray[i][0];
      numberNode.textContent = wordArray[i][1];
      templ.appendChild(wordNode);
      templ.appendChild(numberNode);
      results.appendChild(templ);
    }

  });
};