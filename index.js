window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.fade');
  const transition_el2 = document.querySelector(".slide")

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 1000);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    
    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;


      transition_el2.classList.add('is-active');


      setInterval(() => {
        window.location.href = target;
      }, 650 );
    })
  }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
     document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-250px";
    }
    prevScrollpos = currentScrollPos;

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}