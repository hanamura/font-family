var parse     = require('../index').parse;
var stringify = require('../index').stringify;

// ===
// ===

(function() {
  console.log('parse() - basic');

  var result = parse('"Helvetica Neue", Helvetica, sans-serif');

  console.assert(result.length === 3, 'result.length must be 3');
  console.assert(
    result[0] === 'Helvetica Neue' &&
    result[1] === 'Helvetica'      &&
    result[2] === 'sans-serif'
  , 'result must be correct'
  );
})();

// ===
// ===

(function() {
  console.log('parse() - additional');

  var result = parse('"Helvetica Neue",Helvetica,sans-serif');

  console.assert(result.length === 3, 'result.length must be 3');
  console.assert(
    result[0] === 'Helvetica Neue' &&
    result[1] === 'Helvetica'      &&
    result[2] === 'sans-serif'
  , 'result must be correct'
  );
})();

// ===
// ===

(function() {
  console.log('stringify() - basic');

  var result = stringify(['Helvetica Neue', 'Helvetica', 'sans-serif']);

  console.assert(result === '"Helvetica Neue", Helvetica, sans-serif', 'result must be correct');
})();

// ===
// ===

(function() {
  console.log('stringify() - options');

  var result = stringify(['Helvetica Neue', 'Helvetica', 'sans-serif'], {quote: "'"});

  console.assert(result === "'Helvetica Neue', Helvetica, sans-serif", 'result must be correct');
})();

// ===
// ===

console.log('OK');
