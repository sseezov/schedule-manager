import { registerHandler } from '../core/init'
import Router from '../core/router'
import render from '../core/render'

export default function SidebarCategory({ text }) {
  const content = Router.getRoute(text)

  const onClick = async () => {
    render('#main', content)
  }
  const id = registerHandler(onClick)

  return <li data-id={id}>{text}</li>
}