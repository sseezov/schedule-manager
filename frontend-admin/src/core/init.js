export const handlers = {
  id: 0,
  getId: function () { return ++this.id },
}

export const init = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    const { id } = e.target.dataset
    if (id) {
      handlers[id]()
    }
  })
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
  })
}
