window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.fade');
  const transition_el2 = document.querySelector(".slide")

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 1000);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    console.log(anchor);
    
    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el2.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 650);
    })
  }
}