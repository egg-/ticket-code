/* globals describe */

'use strict'

var assert = require('assert')
var ticketCode = require('../')

describe('Generate and validate', function () {
  var code = null
  var codes = []
  var codeLength = 15
  var checksumIdx = 7
  var checksumSeed = 5

  for (var i = 0; i < 10; i++) {
    code = ticketCode.generate(checksumSeed, codeLength, checksumIdx)
    assert.equal(code.length, codeLength)
    assert.equal(ticketCode.validate(code, checksumSeed, checksumIdx), true)

    codes.push(code)
  }

  // KJQM2GX4KW3P6FN -> KJQM2GX4KW3P6FA
  assert.equal(ticketCode.validate('KJQM2GX4KW3P6FA', checksumSeed, checksumIdx), false)

  console.log(codes)
})
