export default async function (parentSelector, content) {
  document.querySelector(parentSelector).innerHTML = await content
}
