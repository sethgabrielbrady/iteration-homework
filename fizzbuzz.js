
function fizzBuzz(numberInput){

    let fizzyArray = [];
    for (i=1; i <= numberInput; i++){
      let number = i;


    if (number % 5 === 0 && number % 3 === 0 ){
        fizzyArray.push('fizzbuzz');
      }else if (number % 3 === 0 ){
          fizzyArray.push('fizz');
      }else if (number % 5 === 0){
          fizzyArray.push('buzz');
      }else{
          fizzyArray.push(number);
    }
  }
  return fizzyArray;
}
let something = fizzBuzz(30);
console.log(something);


let testRunner = require('./fizzbuzz-tests.js');
testRunner(fizzBuzz);



















/********************************************/
module.exports = function testRunner(fizzBuzz) {

    let hasErrors = false;
    function assert(condition, msg, e) {
        if (!condition) {
            console.error(msg);
            hasErrors = true;
        }
    }

    assert(typeof(fizzBuzz) === 'function', '`fizzBuzz` is not a function (got ' + typeof(fizzBuzz) + ' instead)');
    if (typeof(fizzBuzz) === 'function') {
        let max;
        try {

            max = Math.round(Math.random() * 10) + 15;
            let result = fizzBuzz(max);
            assert(Array.isArray(result), 'Expected the result of `fizzBuzz(' + max + ')` to be an array, but got ' + typeof(result) + ' instead');
            if (Array.isArray(result)) {
                assert(result.length === max, 'Expected the resulting array to have ' + max + ' entries, but it has ' + result.length);
                assert(result[0] === 1, 'Expected entry with index 0 to be 1, but saw ' + result[0] + ' instead.');
                assert(result[2] === 'fizz', 'Expected entry with index 2 to be "fizz", but saw ' + result[2] + ' instead.');
                assert(result[3] === 4, 'Expected entry with index 3 to be 4, but saw ' + result[3] + ' instead.');
                assert(result[4] === 'buzz', 'Expected entry with index 4 to be "buzz", but saw ' + result[4] + ' instead.');
                assert(result[14] === 'fizzbuzz', 'Expected entry with index 14 to be "fizzbuzz", but saw ' + result[14] + ' instead.');
            }

        } catch(e) {
            assert(false, 'Got an error from `fizzBuzz(' + max + ')`: ' + e.message);
        }

        if (!hasErrors) {
            console.log('You have completed the Mission! Congratulations!\n');
        }

        assert(!/([\s\n]|^)(for|while)([\s\n]|$)/.test(fizzBuzz.toString()), 'EPIC MODE: To complete epic mode, do not use any `for` or `while` loops.');

        if (!hasErrors) {
            console.log('You have completed EPIC Mode! Congratulations!\n');
        }

    }
};
