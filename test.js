var expect = require('chai').expect;

var parse     = require('./index').parse;
var stringify = require('./index').stringify;

describe('font-family', function() {
  describe('parse()', function() {
    it('should parse family names', function() {
      var result = parse('"Helvetica Neue", Helvetica, sans-serif');

      expect(result).to.have.length(3);
      expect(result[0]).to.equal('Helvetica Neue');
      expect(result[1]).to.equal('Helvetica');
      expect(result[2]).to.equal('sans-serif');
    });

    it('should parse family names even if it is minified', function() {
      var result = parse('"Helvetica Neue",Helvetica,sans-serif');

      expect(result).to.have.length(3);
      expect(result[0]).to.equal('Helvetica Neue');
      expect(result[1]).to.equal('Helvetica');
      expect(result[2]).to.equal('sans-serif');
    });
  });

  describe('stringify()', function() {
    it('should stringify list of family names', function() {
      var result = stringify(['Helvetica Neue', 'Helvetica', 'sans-serif']);

      expect(result).to.equal('"Helvetica Neue", Helvetica, sans-serif');
    });

    it('should stringify list of family names even if single quotes are specified', function() {
      var result = stringify(['Helvetica Neue', 'Helvetica', 'sans-serif'], {quote: "'"});

      expect(result).to.equal("'Helvetica Neue', Helvetica, sans-serif");
    });
  });
});
