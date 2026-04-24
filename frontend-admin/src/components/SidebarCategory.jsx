import styles from './Sidebar.module.css'

export default function SidebarCategory({ text, href, isActive }) {
  return <li class={isActive ? styles.active : ''}>
    <a href={href}>{text}</a>
  </li>
}