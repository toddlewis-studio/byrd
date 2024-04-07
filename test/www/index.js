const byrd = require('../../lib/byrd.js')

const homeRoute = () => {
  const testId = byrd.event.click(el => {
    el.innerText = 'Works!'
    document.title = 'Works!'
  })
  return `
    <h1>Byrd Engine</h1>
    <button id="${testId}">Test</button>
  `
}

const app = document.createElement('div')
document.body.appendChild(app)
byrd.init(app, {'#': homeRoute})
