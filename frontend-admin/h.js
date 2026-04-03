export function h(tag, props, ...children) {
  if (typeof tag === 'function') {
    return tag(props)
  }

  const attrs = props
    ? Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')
    : ''

  const childrenStr = children.flat().join('')

  return `<${tag} ${attrs}>${childrenStr}</${tag}>`.replace(' >', '>')
}
