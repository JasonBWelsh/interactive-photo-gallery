const search = document.querySelector('#search');
const image = document.querySelectorAll('.image');
let holdImg ; //holds reference to img each time through loop


$('#search').on('keyup', () => {
  for (let i=0; i<image.length; i+=1) {
    holdImg = image[i];
    /*console.log($(holdImg).attr('alt'));*/
    if ( $(holdImg).attr('alt').includes(search.value) == true ) {
      console.log('it worked');
      holdImg.style.display = 'block';
    } else {
      holdImg.style.display = 'none';
    }
  }
});





