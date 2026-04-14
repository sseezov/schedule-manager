import Router from '../core/router'
import render from '../core/render'

export default function SidebarCategory({ text }) {
  const content = Router.getRoute(text)

  return <li onClick={() => render('#main', content)}>{text}</li>
}