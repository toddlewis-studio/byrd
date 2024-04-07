const s = {}

const register = (id, fn) => {
  const p = id.split('.')
  if(!s[p[0]]) s[p[0]] = {}
  s[p[0]][p[1]] = fn
}

const service = (...e) => {
  const key = e[0][0]
  const p = key.split('.')
  return s[p[0]][p[1]]
}

module.exports = {service, register}
