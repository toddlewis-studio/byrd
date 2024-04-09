const byrd = require('../../lib/byrd.js')

document.title = 'Byrd - UI Library'
byrd.data`counter`(0)

byrd.register('main.counter', () => {
  const val = byrd.data`counter`() + 1
  byrd.data`counter`(val)
  return val
})

byrd.element('home', () => {
  const counterId = byrd.event.guid()
  const testId = byrd.event.click(el => 
    byrd.id(counterId).innerText = 
      byrd.service`main.counter`()
  )
  return `
    <h1>Byrd Engine <span id="${counterId}">${byrd.data`counter`()}</span></h1>
    <button id="${testId}">Test</button>
    <a href="#other">Other</a>
  `
})

byrd.element('other', () => {
  byrd.service`main.counter`()
  return `
    <h1>Other <span>${byrd.data`counter`()}</span></h1>
    <br>
    <br>
    <br>
    <br>
    <a href="#">Home</a>
  `
})

const app = document.createElement('div')
document.body.appendChild(app)
byrd.init(
  app, 
  {
    '#': byrd.el('home'),
    '#other': byrd.el('other')
  }
)
