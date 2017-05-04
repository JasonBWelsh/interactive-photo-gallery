const search = document.querySelector('#search');
const thumbDiv = document.querySelectorAll('.thumb-div');
const image = document.querySelectorAll('.image');

search.addEventListener('keyup', (e) => {
  for ( let i=0; i<image.length; i += 1 ) {
    const holdImg = image[i];
    const captionText = holdImg.getAttribute("alt").toLowerCase();
    const imgContainer = holdImg.parentNode.parentNode; // references .thumb-div
    if (captionText.includes(search.value.toLowerCase()) ) {
        imgContainer.style.display = 'block';
    } else {
        imgContainer.style.display = 'none';
    }
  }
});


// Original jQuery-JS hybrid frankenstein monster 

/*$('#search').on('keyup', () => {
  for (let i=0; i<image.length; i+=1) {
    holdImg = image[i];
    if ( $(holdImg).attr('alt').includes(search.value.toLowerCase()) === true ) {
      holdImg.parentElement.style.display = 'block';
    } else {
      holdImg.parentElement.style.display = 'none';
    }
  }
});
*/




/*search.addEventListener("keyup", () => {
	for ( let i=0; i<image.length; i+=1 ) {
		holdImg = image[i];
		captionText = thumbDiv[i].getAttribute("alt").toLowerCase();
		if ( holdImg.getAttribute() ) {

		}
	}
});
*/



/*

let search = document.querySelector('.search');
          let a = document.querySelectorAll('.item');
          search.addEventListener("keyup", () => {
            let inputText = search.value.toLowerCase();
            for(let i=0; i < a.length; i++ ) {
              let captionText = a[i].getAttribute("title").toLowerCase();
              if (captionText.includes(inputText)){
                a[i].parentElement.style.display = "block";
              }else{
                a[i].parentElement.style.display = "none";
              }
            }
          });

          */