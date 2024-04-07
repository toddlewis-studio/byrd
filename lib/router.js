let fnque = [], pageloaded = false, app = undefined
const pushfn = fn => {
  if(pageloaded) fn()
  else fnque.push(fn)
}

const init = (el, routes, pageNotFoundHash = '#') => {
  let currentRoute
  const router = () => {
    const route = routes[location.hash.length === 0 ? '#' : location.hash]
    if(currentRoute != route) {
      pageloaded = false
      currentRoute = route
      el.innerHTML = route ? route() : routes[pageNotFoundHash]()
      setTimeout(() => { while(fnque[0]) fnque.shift()() }, 0)
      pageloaded = true
    }
  }
  addEventListener('hashchange', () => router())
  router()  

  return () => currentRoute
}

module.exports = {init, pushfn, loaded: () => pageloaded}
