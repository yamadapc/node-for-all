for-all
=======

A simple forAll implementation in node.js. Based on node-quickcheck.

## Installing

Install with `npm install for-all`.

## Usage

```javascript
var forAll = require('for-all');
var chance = new (require('chance'))();
var add1 = function(x) { return x + 1; }

forAll(add1, function(ret, args) {
  return args[0] < ret;
}, [chance.integer.bind(chance)]);
```

## forAll(fn, property generators)

Checks if a property stands against a number of value generators through 100
iterations.

### Params:

* **Function** *fn* The function to test.
* **Function** *property* A property to test over generated values.
* **Array.<Function>** *[generators]* Value generators, to be fed in order into

## License

Copyright (c) 2014 Pedro Tacla Yamada. Licensed under the MIT license.
Please refer to the [LICENSE](LICENSE) file for more info.

## Donations
Would you like to buy me a beer? Send bitcoin to 3JjxJydvoJjTrhLL86LGMc8cNB16pTAF3y
