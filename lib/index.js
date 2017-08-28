'use strict'

// except B, D, I, O, U, V, 0, 1, 8
const CHARS_ALPHA = 'ACEFGHJKLMNPQRSTWXYZ'
const CHARS_NUMERIC = '2345679'
const CHARS_ALL = CHARS_ALPHA + CHARS_NUMERIC
const DEFAULT_CODE_LENGTH = 10

function randomIdx (max) {
  return Math.floor(Math.random() * (max + 1))
}

function makeCheckSum (code, checksumSeed) {
  var checksum = 0
  for (var i = 0, len = code.length; i < len; i++) {
    checksum += code[i].charCodeAt(0) + checksumSeed
  }
  return CHARS_ALL[checksum % CHARS_ALL.length]
}

function generate (codeLength) {
  var code = [CHARS_ALPHA[randomIdx(CHARS_ALPHA.length - 1)]]
  for (var i = 0; i < codeLength; i++) {
    code.push(CHARS_ALL[randomIdx(CHARS_ALL.length - 1)])
  }
  return code.join('')
}

module.exports = {
  /**
   * generate ticket code
   * @param  {number} checksumSeed
   * @param  {number} [codeLength] 10
   * @param  {number} [checksumIdx]
   * @return {string}
   */
  generate: function (checksumSeed, codeLength, checksumIdx) {
    codeLength = codeLength || DEFAULT_CODE_LENGTH
    checksumIdx = checksumIdx || Math.floor(checksumIdx / 2)

    if (checksumIdx > codeLength) {
      throw new Error('The checksum index can not exceed the length of the code.')
    }

    var code = generate(codeLength - 2)
    return [
      code.substr(0, checksumIdx),
      makeCheckSum(code, checksumSeed),
      code.substr(checksumIdx)
    ].join('')
  },
  /**
   * validate code
   * @param  {string} code ticket code
   * @param  {number} checksumSeed
   * @param  {number} [checksumIdx]
   * @return {boolean}
   */
  validate: function (code, checksumSeed, checksumIdx) {
    checksumIdx = checksumIdx || Math.floor(code.length / 2)
    return code[checksumIdx] === makeCheckSum([code.substr(0, checksumIdx), code.substr(checksumIdx + 1)].join(''), checksumSeed)
  }
}
