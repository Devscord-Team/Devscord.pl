import "./src/global.css"

export function onClientEntry() {
  document.body.classList.toggle(
    "dark",
    JSON.parse(window.localStorage.getItem("theme"))
  )
}
