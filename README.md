# font-family

CSS font-family parser/stringifier.

## Example

```javascript
var parse = require('font-family').parse;

parse('"Helvetica Neue", Helvetica, sans-serif');
// => [ 'Helvetica Neue', 'Helvetica', 'sans-serif' ]
```

```javascript
var stringify = require('font-family').stringify;

stringify(['Helvetica Neue', 'Helvetica', 'sans-serif']);
// => '"Helvetica Neue", Helvetica, sans-serif'
```

## License

MIT
