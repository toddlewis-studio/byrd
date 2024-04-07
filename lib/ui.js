const _el = {}
const element = (id, fn) => _el[id] = fn
const el = id => _el[id]
const ui = (id, ...params) => _el[id](...params)
module.exports = {element, el, ui}
