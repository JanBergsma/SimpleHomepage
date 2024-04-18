const body = document.getElementsByTagName("body")[0];
const isDarkTheme = localStorage.getItem("DarkTheme");
const toggler = document.getElementById("dark-light-toggler");

if (isDarkTheme === null) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.classList.toggle("dark");
    localStorage.setItem("DarkTheme", true);
    toggler.checked = true;
  } else {
    localStorage.setItem("DarkTheme", false);
    toggler.checked = false;
  }
} else if (isDarkTheme === "true") {
  body.classList.toggle("dark");
  toggler.checked = true;
}

toggler.addEventListener("click", () => {
  localStorage.setItem(
    "DarkTheme",
    !(localStorage.getItem("DarkTheme") === "true"),
  );
  body.classList.toggle("dark");
});
