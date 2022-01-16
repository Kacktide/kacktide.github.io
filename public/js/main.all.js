const DARK_MODE = "dark",
  LIGHT_MODE = "light",
  THEME = "mode";
function addTheme() {
  const e = document.body;
  localStorage.getItem(THEME) === LIGHT_MODE
    ? (e.classList.add("light"),
      (document.getElementById("ef").innerHTML = '<i class="fas fa-moon"></i>'))
    : (e.classList.remove("light"),
      (document.getElementById("ef").innerHTML = '<i class="fas fa-sun"></i>'));
}
document.addEventListener("DOMContentLoaded", () => {
  addTheme(),
    (document.getElementById("ef").onclick = function () {
      let e = localStorage.getItem(THEME);
      localStorage.setItem(THEME, e === LIGHT_MODE ? "dark" : LIGHT_MODE),
        addTheme();
    });
});
