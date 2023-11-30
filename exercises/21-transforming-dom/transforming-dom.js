/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const image = document.querySelector('#imageCat');
  // console.log(ref);
  image.src= " https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  console.log(image);
  //change link
  const chngeLink = document.querySelector('a[href="https://www.w3schools.com/js/default.asp"]');
  // console.log(chngeLink);
  chngeLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  console.log(chngeLink);
/*
<div class="alert alert-success">
        Change the text inside this <em>&lt;div&gt;</em> to say "I am
        victorious!"
      </div>
*/
  const textChange = document.querySelector('#id1');
  textChange.innerHTML = 'I am victorious!';
  console.log(textChange);
})();

//chnage background color
const bgChange = document.querySelector('.alert alert-info');
bgChange.sty
