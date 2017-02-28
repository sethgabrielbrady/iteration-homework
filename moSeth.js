let sonnets = require('./sonnets.js')



function wordFrequency(inputString){//creates a function that takes a string as an argument
    let splitString = inputString.split(' ');
      console.log(splitString);//show that out string gets put into the array splitString
    let stringContainer = new Object();
          //for each index of array splitString, execute function propertyAdd, taking the value of
          //each index of splitString as an argument.
    splitString.forEach(function propertyAdd(each) {
        if (stringContainer[each] >= 1){
            stringContainer[each]= stringContainer[each] + 1;
          }else {
              stringContainer[each] = 1;
              }
          console.log(stringContainer);//testing
        });
}

wordFrequency("The cat in the hat cat the");










































// let testRunner = require('./word-frequency-tests.js');
// testRunner(wordFrequency);
