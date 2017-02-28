module.exports = function testRunner(wordFrequency) {

    let hasErrors = false;
    function assert(condition, msg, e) {
        if (!condition) {
            console.error(msg);
            hasErrors = true;
        }
    }

    assert(typeof(wordFrequency) === 'function', '`wordFrequency` is not a function (got ' + typeof(wordFrequency) + ' instead)');
    if (typeof(wordFrequency) === 'function') {
        try {
            let result = wordFrequency('i like the cows in the barn in the fields');
            assert(typeof(result) === 'object', 'Expected the result of `wordFrequency("i like the cows in the barn in the fields")` to be an object, but got ' + typeof(result) + ' instead');
            if (typeof(result) === 'object') {
                let keys = Object.keys(result);
                assert(keys.length === 7, 'Expected there to be 7 keys in `wordFrequency` result, but saw ' + keys.length + ' instead.');
                assert(result['i'] === 1, 'Expected result["i"] to have value 1, but saw ' + result["i"] + ' instead.');
                assert(result['like'] === 1, 'Expected result["like"] to have value 1, but saw ' + result["like"] + ' instead.');
                assert(result['the'] === 3, 'Expected result["the"] to have value 3, but saw ' + result["the"] + ' instead.');
                assert(result['cows'] === 1, 'Expected result["cows"] to have value 1, but saw ' + result["cows"] + ' instead.');
                assert(result['in'] === 2, 'Expected result["in"] to have value 2, but saw ' + result["in"] + ' instead.');
                assert(result['barn'] === 1, 'Expected result["barn"] to have value 1, but saw ' + result["barn"] + ' instead.');
                assert(result['fields'] === 1, 'Expected result["fields"] to have value 1, but saw ' + result["fields"] + ' instead.');
            }

        } catch(e) {
            assert(false, 'Got an error from `wordFrequency`: ' + e.message);
        }

        if (!hasErrors) {
            console.log('You have completed the Mission! Congratulations!\n');
        }

        let result = wordFrequency('1 person and a cow get hungry. And being hungry is bad.');
        let keys = Object.keys(result);
        assert(keys.length === 9, 'EPIC MODE: Expected there to be 7 keys in `wordFrequency("1 person and a cow get hungry. And being hungry is bad.")` result, but saw ' + keys.length + ' instead.');
        assert(result['and'] === 2, 'EPIC MODE: Expected result["and"] to have value 2, but saw ' + result["and"] + ' instead.');
        assert(result['hungry'] === 2, 'EPIC MODE: Expected result["hungry"] to have value 1, but saw ' + result["hungry"] + ' instead.');
        assert(typeof(result['1']) === 'undefined', 'EPIC MODE: Expected result["1"] to be undefined, but saw ' + result["1"] + ' instead.');
    }
};
