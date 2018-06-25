# npm-check-cache

[![NPM Version](http://img.shields.io/npm/v/npm-check-cache.svg?style=flat)](https://www.npmjs.org/package/npm-check-cache)
[![NPM Downloads](https://img.shields.io/npm/dm/npm-check-cache.svg?style=flat)](https://www.npmjs.org/package/npm-check-cache)
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/braceslab/npm-check-cache.svg?branch=master)](https://travis-ci.org/braceslab/npm-check-cache)

## Purpose

## Installing

````bash
npm i -g npm-check-cache
````

### Usage

**List all packages in cache**

```bash
npm-check-cache
```

```bash
...
utils-merge 1.0.0
utils-merge 1.0.1
uuid 1.4.2
uuid 3.1.0
uuid 3.2.1
uuid 3.4.3
uws 9.14.0
v8-compile-cache 1.1.2
v8-compile-cache 2.0.0
v8flags 2.1.1
vali-date 1.0.0
validate-npm-package-license 3.0.1
validate-npm-package-license 3.0.3
validate-npm-package-name 3.0.0
validator 9.4.1
value-equal 0.4.0
vary 1.1.2
vendors 1.0.1
vendors 1.0.2
verror 1.10.0
vinyl 0.2.3
vinyl 0.4.6
vinyl 0.5.3
vinyl 1.2.0
vinyl 2.0.2
vinyl 2.1.0
...

```

**List packages in cache filtered by "name"**

```bash
npm-check-cache uglify
```

```bash
gulp-uglify 1.5.4
gulp-uglify 3.0.5
gulp-uglify-es 1.0.0
uglify-es 3.3.9
uglify-es 3.3.10
uglify-js 2.6.4
uglify-js 2.6.31
uglify-js 2.8.29
uglify-js 3.0.2
uglify-js 3.3.10
uglify-js 3.3.11
uglify-js 3.3.25
uglify-js 3.3.28
uglify-save-license 0.4.1
uglify-to-browserify 1.0.2
uglifyjs-webpack-plugin 1.2.5
```

---

### OS

Tested on Linux (Ubuntu/Debian)
Not tested on MacOS and Windows

## License

The MIT License (MIT)

Copyright (c) 2018 [braces lab](https://braceslab.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
