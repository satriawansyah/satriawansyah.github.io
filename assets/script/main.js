// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// clear form before upload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// theme-button
function toggleTheme() {
  const body = document.body;
  const themeButton = document.getElementById("themeButton");
  const profileImg = document.querySelector(".profile-img");
  const icon = document.getElementById("icon");

  body.classList.toggle("dark-mode");
  themeButton.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    profileImg.src = "./assets/images/profile2.png";
    icon.innerHTML = "&#9728;";
  } else {
    profileImg.src = "./assets/images/profile1.png";
    icon.innerHTML = "&#9790;";
  }
}
