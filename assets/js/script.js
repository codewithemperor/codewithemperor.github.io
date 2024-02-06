// Add this to your existing script.js or in a separate script file


const navbars = document.querySelector('#navbar');
// console.log(navbars)

function scrolly () {
  if (window.scrollY > 100 ) {
    navbars.classList.add('navbar-blur');
    console.log("done");
  }

  else {
    navbars.classList.remove('navbar-blur');
    // alert("done");
  }
}

window.addEventListener('scroll', scrolly)