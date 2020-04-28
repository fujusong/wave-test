(function () {
  'use strict';
    function getRandomNumber() {

        var random = Math.floor(Math.random() * 100);
        if (random >= 100)
            throw new Error("Error");
        return random;
    }
    exports.getRandomNumber = getRandomNumber;
  }());