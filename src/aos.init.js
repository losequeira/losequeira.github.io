/*AOS.init();

// AOS.refreshHard();

console.log("initing AOS", AOS);

*/

console.log("SET");


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log("scroll", scroll_pos);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  console.log("SET 2");

  if (!ticking) {
    console.log("SETTIIING");
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});