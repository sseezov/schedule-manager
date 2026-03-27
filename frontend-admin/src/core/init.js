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
  const handle = (e) => {
    const { id } = e.target.dataset
    if (e.type === 'submit') {
      e.preventDefault()
    }
    if (handlers[id]) {
      handlers[id](e)
    }
  }

  document.addEventListener('click', handle)
  document.addEventListener('submit', handle)
}
