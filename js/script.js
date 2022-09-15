let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
// let clip = document.querySelectorAll(".clip");
// console.log(clip);

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
});

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// for (let i = 0; i < clip.length; i++) {
//   clip[i].onmouseenter = () => {
//     clip[i].play();

//   };
//   clip[i].onmouseout = () => {
//     clip[i].pause();
//   };
// }
