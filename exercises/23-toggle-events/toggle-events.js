// (function () {
  // <body>
  //   <section id="acceptCookiesPopup" class="bg-dark text-white sticky">
  //     <div class="container pt-4 pb-4">
  //       <p>
  //         We use cookies to give you the best online experience, measure your
  //         visits to our sites and to enable marketing activities (including with
  //         our marketing partners).
  //       </p>
  //       <button id="acceptCookiesButton" class="btn btn-success">
  //         Accept Cookies
  //       </button>
  //     </div>
  //   </section>
  /**
   * Problem 1: Dismiss the "Accept Cookies" popup
   *
   * When the user clicks on the "Accept Cookies" button, the "Accept Cookies" popup should disappear.
   */
  // Write your answer here
  /**
   * Problem 2: Show comments for the news story.
   *
   * You will need modify the HTML so that you can target HTML elements o the page.
   *
   * You will be toggling the comments on the page.
   * If the comments are hidden, this should happen when the user clicks on the "View Comments" button:
   * 1. The comment section should appear
   * 2. The "View Comments" button will change to say "Hide Comments"
   *
   * If the comments are visible, this should happen when the user clicks on the "Hide Comments" button:
   * 1. The comments sections should disappear
   * 2. The "Hide Comments" button should change to say "View Comments"
   *
   * HINT: Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   */
  // Write your answer here
// })();
const popupBtn = document.querySelector('#acceptCookiesButton');
  const popupSection = document.querySelector('#acceptCookiesPopup');
  popupBtn.addEventListener('click', () => {
    popupSection.style.display = 'none';
  })



// const cookieDismiss = document.querySelector('acceptCookiesButton');

//  const popupSection = document.querySelector('#acceptCookiesPopup');
// cookieDismiss.addEventListener('click', () => {
//   popupSection.style.display = 'none';
// });
const toggleComments = document.querySelector('#toggleComments');
toggleComments.addEventListener('click', () => {

   if (comments.classList.contains("hidden")) {
    
     comments.classList.remove("hidden");
     toggleComments.innerHTML = 'Hide Comments';
  } else {
    
     comments.classList.add("hidden");
      toggleComments.innerHTML = 'View Comments';
  }
  } 
)
 