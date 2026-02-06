var or = require("es-logical-or-operator")
var isObj = require("es-object-atoms/isObject")
var isNull = require("@is-(unknown)/is-null")

module.exports = function isObject(value) {
  return or(isObj(value), isNull(value))
}