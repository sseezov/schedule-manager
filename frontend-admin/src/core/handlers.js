export const handlers = {
  id: 0,
  click: {},
  submit: {},
  openModal: (modalId) => {
    document.getElementById(modalId).classList.add('show')
  },
  closeModal: (modalId) => {
    document.getElementById(modalId).classList.remove('show')
  },
  showFlashMessage: ({ type, message }) => {
    const flashContainer = document.querySelector('.flash-message')
    flashContainer.innerHTML = message
    flashContainer.classList.add('show', type)
    setTimeout(() => {
      flashContainer.classList.remove('show', type)
      flashContainer.innerHTML = ''
    }, 1000)
  },
  getId: function () { return ++this.id },
}

export const registerClick = (handler) => {
  const id = handlers.getId()
  handlers.click[id] = handler
  return id
}

export const registerSubmit = (handler) => {
  const id = handlers.getId()
  handlers.submit[id] = handler
  return id
}

export const initHandlers = () => {
  const handleClick = (e) => {
    const { handler } = e.target.dataset
    if (handlers.click[handler]) {
      handlers.click[handler](e)
    }
  }

  const handleSubmit = (e) => {
    const { handler } = e.target.dataset
    e.preventDefault()
    if (handlers.submit[handler]) {
      handlers.submit[handler](e)
    }
  }

  document.addEventListener('click', handleClick)
  document.addEventListener('submit', handleSubmit)
}
