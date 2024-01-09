// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  const closeNavOutsideClick = (event) => {
    if (!navLists.contains(event.target) && !burger.contains(event.target)) {
      navLists.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");

      window.removeEventListener("click", closeNavOutsideClick);
    }
  };

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");

    window.addEventListener("click", closeNavOutsideClick);
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
  const burger = document.getElementById("burger");
  const profileImg = document.querySelector(".profile-img");
  const icon = document.getElementById("icon");

  body.classList.toggle("dark-mode");
  themeButton.classList.toggle("dark-mode");
  burger.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    profileImg.src = "./assets/images/profile2.png";
    icon.innerHTML = "&#9728;";
  } else {
    profileImg.src = "./assets/images/profile1.png";
    icon.innerHTML = "&#9790;";
  }
}
