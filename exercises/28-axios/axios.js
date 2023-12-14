
const message = 'https://dog.ceo/api/breeds/image/random';

const image = document.querySelector("#image");
const btn = document.querySelector("#btnpress");
btn.addEventListener("click", () => {
  

  axios.get(message)
    .then(response => {
      const imageURL = response.data.message;
      image.src = imageURL;
      
      const para = document.querySelector("#message");
      para.textContent = "Success";
    })
    .catch(error => {
      console.error('Error fetchng dog image:', error);
    });
});
