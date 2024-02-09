window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("navbar").classList.add("blur");
  } else {
    document.getElementById("navbar").classList.remove("blur");
  }
}
