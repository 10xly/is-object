# `@is-(unknown)/is-object`

Check if a value is of type `object`. By the way, `null` IS an object, so this returns true for null. If you don't want that, use [is-non-null-object](https://github.com/is-unknown/is-non-null-object). This oackage returns true for functions as well, and arrays.

## Usage
```js

var isObject = require('@is-(unknown)/is-object')

var assert = require('assert-fn')

assert(isObject({}))
assert(isObject(null))
assert(isObject([]))
assert(isObject(function(){}))
assert(isObject(new Number()))
assert(isObject(/this is an object/))

assert(!isObject(41))
assert(!isObject('test'))
assert(!isObject(Symbol.for('test')))
assert(!isObject(8n))
```