const search = document.querySelector('#search');
const image = document.querySelectorAll('.image');
let holdImg ; //holds reference to img each time through loop

$('#search').on('keyup', () => {
  for (let i=0; i<image.length; i+=1) {
    holdImg = image[i];
    if ( $(holdImg).attr('alt').includes(search.value.toLowerCase()) == true ) {
      holdImg.parentElement.style.display = 'block';
    } else {
      holdImg.parentElement.style.display = 'none';
    }
  }
});





