/*
==========================================
  Active navbar
==========================================
*/

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

/*
==========================================
  Nav Hide
==========================================
*/

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

/*
==========================================
  counter Design
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      currrent = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      steps = Math.abs(Math.floor(duration / range));
    timer = setInterval(() => {
      currrent += increment;
      obj.textContent = currrent;

      if (currrent == end) {
        clearInterval(timer);
      }
    }, steps);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
