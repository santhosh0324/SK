window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#nav').style.opactiy=0.9;
  } else {
    document.querySelector('#nav')
 .style.opactiy= 1; }
}); 