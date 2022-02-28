let wheel = document.getElementById("wheel");
let nav = document.getElementById("show");
let count = 0;
function dropout() {
  if (count % 2 == 0) {
    wheel.classList.add("move");
    wheel.classList.add("black");
    wheel.classList.remove("white");
    wheel.classList.remove("back");
    nav.classList.add("shownav");
    nav.classList.remove("hidenav");
  } else {
    nav.classList.add("hidenav");
    wheel.classList.add("white");
    wheel.classList.remove("black");
    nav.classList.remove("shownav");
    wheel.classList.remove("move");
    wheel.classList.add("back");
  }
  count++;
}
