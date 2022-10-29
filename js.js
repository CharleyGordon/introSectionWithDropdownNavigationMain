const burgar = document.querySelector(".menu-trigger");
const menu2 = document.querySelector(".menu2");
const features = document.querySelector(".feat");
const company = document.querySelector(".comp");
let open = false;
let fShow = false;
let cShow = false;
burgar.addEventListener("click", () => {
  switch (open) {
    case false:
      burgar.classList.add("open");
      menu2.classList.add("fin");
      open = true;
      break;
    default:
      burgar.classList.remove("open");
      menu2.classList.remove("fin");
      open = false;
      break;
  }
});
features.addEventListener("click", () => {
  switch (fShow) {
    case false:
      document.querySelector(".feat-todo").classList.add("flip");
      features.classList.add("rot");
      fShow = true;
      break;
    default:
      document.querySelector(".feat-todo").classList.remove("flip");
      features.classList.remove("rot");
      fShow = false;
      break;
  }
});
company.addEventListener("click", () => {
  switch (cShow) {
    case false:
      document.querySelector(".comp-his").classList.add("flip");
      company.classList.add("rot");
      cShow = true;
      break;
    default:
      document.querySelector(".comp-his").classList.remove("flip");
      company.classList.remove("rot");
      cShow = false;
      break;
  }
});
