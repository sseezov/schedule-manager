import { registerHandler } from '../../core/init'
import Router from '../../core/router'
import render from '../../core/render'

export default function SidebarCategory(category) {
  const content = Router.getRoute(category)

  const onClick = async () => {
    render(document.querySelector('#main'), await content)
  }
  const id = registerHandler(onClick)

  return `<li data-id=${id}>${category}</li>`
}
