let sonnets = require('./sonnets.js');



function wordFrequency(inputString){

    let splitString = inputString.split(' ');
    console.log(splitString);

}

wordFrequency("The cat in the hat cat the");










































let testRunner = require('./word-frequency-tests.js');
testRunner(wordFrequency);
