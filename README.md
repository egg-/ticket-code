# ticket-code

[![version](https://img.shields.io/npm/v/ticket-code.svg)](https://www.npmjs.com/package/ticket-code) [![download](https://img.shields.io/npm/dm/ticket-code.svg)](https://www.npmjs.com/package/ticket-code)
[![status status](https://travis-ci.org/egg-/ticket-code.svg?branch=master)](https://travis-ci.org/egg-/ticket-code)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

ticket-code is generate ticket codes library for Node.js

## Installation

```sh
$ npm install ticket-code
```

## Usage

A simple checksum code is added to verify the generated code value. For this purpose, it is recommended to specify numerical seed value.

```javascript
var ticketCode = require('ticket-code')
var codeLength = 15 // optional (default 10)
var checksumSeed = 5 // required
var checksumIdx = 7 // optional (default Math.floor(code length / 2))

var code = ticketCode.generate(checksumSeed, codeLength, checksumIdx)  // NPP3YHPEQMCY75W
// ...

ticketCode.validate('NPP3YHPEQMCY75W', checksumSeed, checksumIdx)  // true
ticketCode.validate('NPP3YHPEQMCY75A', checksumSeed, checksumIdx)  // false
```

## Test

Test with mocha

```bash
$ grunt
```

like watch

```bash
$ grunt watch
```

## Contributing

Bug reports and pull requests are welcome on Github at [https://github.com/egg-/ticket-code](https://github.com/egg-/ticket-code)

1. Fork it
1. Create your feature branch.
1. Commit your changes.
1. Push to the branch.
1. Create a new Pull Request.

## License

ticket-code is licensed under the [MIT license](https://github.com/egg-/ticket-code/blob/master/LICENSE).
