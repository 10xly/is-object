var TYPE = require('@extremejs/utils').TYPE

module.exports = function isObject(value) {
  return typeof value === TYPE.OBJECT
}