window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("navbar").classList.add("blur");
    console.log(innerHeight);
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
  } else {
    document.getElementById("navbar").classList.remove("blur");
    console.log(innerHeight);
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
  }
}
