export default function SidebarCategory({ text, href }) {
  return <li>
    <a href={href}>{text}</a>
  </li>
}