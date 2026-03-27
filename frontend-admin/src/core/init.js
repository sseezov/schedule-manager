const handlers = {
  id: 0,
  getId: function () { return ++this.id },
}

export const registerHandler = (handler) => {
  const id = handlers.getId()
  handlers[id] = handler
  return id
}

export const init = () => {
  const app = document.querySelector('#app')
  const handle = (e) => {
    e.preventDefault()
    const { id } = e.target.dataset
    if (id) {
      handlers[id]()
    }
  }

  app.addEventListener('click', handle)
  app.addEventListener('submit', handle)
}
