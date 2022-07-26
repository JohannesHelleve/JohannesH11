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

const mqLarge  = window.matchMedia( '(min-width: 800px)' );

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  console.log(mqLarge);
  var currentScrollPos = window.pageYOffset;
  if(mqLarge){
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "2.5em";
    } else {
      document.getElementById("navbar").style.top = "-250px";
    }
    prevScrollpos = currentScrollPos;
  }else{
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-250px";
    }
    prevScrollpos = currentScrollPos;

  }

}