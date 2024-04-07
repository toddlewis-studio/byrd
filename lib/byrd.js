const data = require('./data.js')
const db = require('./db.js')
const event = require('./event.js')
const http = require('./http.js')
const router = require('./router.js')
const ui = require('./ui.js')
const service = require('./service.js')

//init
const init = (el, routes, dbConfig, pageNotFoundHash) => {
  router.init(el, routes, pageNotFoundHash)
  if(dbConfig) db.init(dbConfig)
}

const byrd = { data, db, event, http, router,
  init,
  ...ui,
  ...service
}

module.exports = byrd
