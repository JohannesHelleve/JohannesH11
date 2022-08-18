window.onload = () => {
  const anchors = document.querySelectorAll('a.animation');
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


