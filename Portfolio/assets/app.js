
const modeBtn = document.getElementById("mode")
modeBtn.addEventListener("click", () => {
    const h = document.querySelector("html")
    h.hasAttribute("data-bs-theme")
        ? h.removeAttribute("data-bs-theme")
        : h.setAttribute("data-bs-theme", "dark")
})

