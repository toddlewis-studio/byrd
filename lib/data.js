const d = {}

const data = (...e) => {
  const key = e[0][0]
  return val => {
    if(key === '*') return d
    if(val !== undefined) d[key] = val 
    if(val === null) delete d[key]
    return d[key]
  }
}

module.exports = data
