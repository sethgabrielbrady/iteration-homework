let sonnets = require('./sonnets.js');



function wordFrequency(inputString){
    let splitString = inputString.split(' ');
    let stringContainer = {};

    splitString.forEach(function propertyAdd(each) {
        if (stringContainer[each] >= 1){
            stringContainer[each] = stringContainer[each] + 1;
          }else {
              stringContainer[each] = 1;
              }
        });

        return stringContainer;

}


wordFrequency(sonnets);






let testRunner = require('./word-frequency-tests.js');
testRunner(wordFrequency);
