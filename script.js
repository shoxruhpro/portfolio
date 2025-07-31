const burgerButton = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burgerButton.addEventListener("click", () => {
  menu.style.display = "block"
  burgerButton.classList.remove("burger")
  burgerButton.classList.add("close")
})
