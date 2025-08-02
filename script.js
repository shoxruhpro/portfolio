const burgerButton = document.querySelector("#burger")
const menu = document.querySelector("#menu")

let isOpen = false

burgerButton.addEventListener("click", () => {
  if (isOpen) {
    menu.style.display = "none"
    burgerButton.classList.remove("close")
    burgerButton.classList.add("burger")
  } else {
    menu.style.display = "block"
    burgerButton.classList.remove("burger")
    burgerButton.classList.add("close")
  }
  isOpen = !isOpen
})
