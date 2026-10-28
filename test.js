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

    it('should parse unquoted multi-word family names', function() {
      var result = parse('Gill Sans Extrabold, sans-serif');

      expect(result).to.have.length(2);
      expect(result[0]).to.equal('Gill Sans Extrabold');
      expect(result[1]).to.equal('sans-serif');
    });

    it('should collapse spaces in unquoted family names', function() {
      var result = parse('Open   Sans ,Times\tNew Roman  , serif ');

      expect(result).to.have.length(3);
      expect(result[0]).to.equal('Open Sans');
      expect(result[1]).to.equal('Times New Roman');
      expect(result[2]).to.equal('serif');
    });

    it('should parse quoted and unquoted multi-word family names together', function() {
      var result = parse('"Helvetica Neue", Times New Roman, sans-serif');

      expect(result).to.have.length(3);
      expect(result[0]).to.equal('Helvetica Neue');
      expect(result[1]).to.equal('Times New Roman');
      expect(result[2]).to.equal('sans-serif');
    });

    it('should throw if an unquoted name is followed by a string', function() {
      expect(function() { parse('Helvetica "Neue"'); }).to.throw('Parse error');
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
