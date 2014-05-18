'use strict'; /* global describe, it */
/*!
 * Dependencies
 * --------------------------------------------------------------------------*/

var Chance = require('chance');

var forAll = require('..');

var chance = new Chance();

describe('forAll(fn, property, generators)', function() {
  function reverse(str) {
    var ret = "";

    for(var len = str.length, i = len - 1; i > -1; i--) {
      ret += str[i];
    }

    return ret;
  }

  it('reverse(reverse(str)) === str', function() {
    forAll(reverse, function(ret, args) {
      return reverse(ret) === args[0];
    }, [chance.string.bind(chance)]);
  });

  it('typeof reverse(str) === \'string\'', function() {
    forAll(reverse, function(ret) {
      return typeof ret === 'string';
    }, [chance.string.bind(chance)]);
  });

  it('reverse(str).length === str.length', function() {
    forAll(reverse, function(ret, args) {
      return ret.length === args[0].length;
    }, [chance.string.bind(chance)]);
  });
});
