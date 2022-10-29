const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const header = document.querySelector("header");
let picker;
const resize = new ResizeObserver((e) => {
  picker = e[0].contentRect.width >= 800 ? true : false;
});
resize.observe(document.body);
hamburger.addEventListener("click", () => {
  let isVisible = header.matches("[data-nav-visible]") ? true : false;
  if (isVisible) {
    header.removeAttribute("data-nav-visible");
  } else header.setAttribute("data-nav-visible", "true");
});

window.addEventListener("click", (e) => {
  let parent = e.target.parentElement;
  if (parent.matches(".checkable")) {
    e.preventDefault();
    let check = parent.getAttribute("data-checked") !== null ? true : false;
    if (check) {
      parent.removeAttribute("data-checked");
    } else {
      parent.setAttribute("data-checked", "");
    }
  } else {
    if (picker) {
      document.querySelectorAll(".checkable").forEach((c) => {
        c.removeAttribute("data-checked");
        return;
      });
    }
  }
});
