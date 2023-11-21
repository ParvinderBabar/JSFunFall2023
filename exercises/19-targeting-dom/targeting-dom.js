/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here


  const list = document.querySelector('ul li myId');
  console.log(list);
  const listClass = document.querySelector('.bg-warning');
  for (let warnings of listClass) {
    console.log(listclass);
  }

  const targetButton = document.querySelector('target-me-button');
  console.log(targetButton);
  const allLink = document.querySelectorAll('.socialMedia');
  allLink.foreach((Links) => {
    console.log(Links);
  })
 
  const nestedTag = document.querySelector('#myRow .col');
  for (let cells of nestedTag)
  {
    console.log(cells);
    }
  



})();
