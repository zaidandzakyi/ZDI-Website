var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {
  menu.classList.toggle("active");
};
//Dark-mode//
if (localStorage.getItem("theme") == "dark") setDarkMode();

function setDarkMode() {
  let emoticon = "";
  let isDark = document.body.classList.toggle("darkmode");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    emoticon = "Light ☀️";
  } else {
    localStorage.removeItem("theme");
    emoticon = "Dark 🌙";
  }
  document.getElementById("darkBtn").innerHTML = emoticon;
}
