'use strict';
var util = require('util');

/**
 * Checks if a property stands against a number of value generators through 100
 * iterations.
 *
 * @api public
 * @param {Function} fn The function to test.
 * @param {Function} property A property to test over generated values.
 * @param {Array.<Function>} [generators] Value generators, to be fed in order into
 * the `property`.
 *
 * @throws Will throw if any of the iterations returns false when fed to the
 * `property` function.
 *
 * @example
 *    var add1 = function(x) { return x + 1; }
 *
 *    forAll(add1, function(ret, args) {
 *      return args[0] < ret;
 *    }, [chance.integer]);
 */

exports = module.exports = function forAll(fn, property, generators) {
  for(var i = 0; i < 100; i++) {
    var values = generators.map(exports.call);
    var ret    = fn.apply(this, values);
    var result = property(ret, values);

    if(!result) {
      var ret_inspection = util.inspect(ret);
      var val_inspection = util.inspect(values);
      throw new Error('After '   + (i+1) + ' tests. Property failed for:\n' +
                      val_inspection + '\n'  +
                      'With value:\n' +
                      ret_inspection);
    }
  }

  return true;
};

/**
 * Calls a function.
 *
 * @api private
 * @param {Function} fn A function to call with no arguments.
 * @return {Mixed} ret The return value of `fn`.
 */

exports.call = function call(fn) {
  return fn();
};
