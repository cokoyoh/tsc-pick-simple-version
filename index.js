/**
 * Use for...of to write a simple version of the pick function from Underscore.js and Lodash.js.
 * It takes an object and an array of keys. It returns the values that the object has at those keys. For example:
 *
 * pick({a: 1}, ['a']) gives [1].
 * pick({a: 1, b: 2}, ['b']) gives [2].
 * pick({a: 1, b: 2}, ['b', 'a']) gives [2, 1].
 */
var pick = function (x, keys) {
    var values = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        values.push(x[key]);
    }
    return values;
};
console.log(pick({ a: 1 }, ['a']));
console.log(pick({ a: 1, b: 2 }, ['b']));
console.log(pick({ a: 1, b: 2 }, ['b', 'a']));
