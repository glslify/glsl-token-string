var tokenize = require('glsl-tokenizer/string')
var test     = require('tape')
var path     = require('path')
var toString = require('./')
var fs       = require('fs')

test('glsl-token-string', function(t) {
  var src = fs.readFileSync(path.join(__dirname, 'fixture.glsl'), 'utf8')

  t.equal(src, toString(tokenize(src)), 'original and detokenized versions are equivalent')
  t.end()
})
