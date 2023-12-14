(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");
    const quote=document.querySelector("#quote");
    btn.addEventListener("click", async function fetchQuote() 
     {
      try {
        const result = await fetch(' https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        const data = await result.json();
        // console.log(data);
        quote.textContent = data;
      }
      catch {
        return console.error("error", err);
      }
})
 } 
   
)
// Call the async function
fetchQuote();

})();
