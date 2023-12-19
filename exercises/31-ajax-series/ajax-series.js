// (function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX requests to solve this problem.
   */
  // const responseFromApi = // What you get back from the Rick and Morty characters API
  // let htmlStr = "<option></option>";
  // for (let character of responseFromApi.results) {
  //   htmlStr += `<option value="${character.id}">${character.name}</option>`;
//   document.addEventListener("DOMContentLoaded", async function () {
//     try {
//       const dropdown = document.querySelector("#dropdown");
//       const characterImage = document.querySelector("#characterImage");

//       // Fetch the list of characters
//       const request = await fetch("https://rickandmortyapi.com/api/character");
//       const data = await request.json();

//       // Assuming the character data has a property like 'results' containing an array of characters
//       data.results.forEach((character) => {
//         const option = document.createElement("option");
//         option.value = character.id; // Set the value based on your character data
//         option.text = character.name; // Set the text based on your character data
//         dropdown.add(option);
//       });

//       // Add event listener for dropdown change
//       dropdown.addEventListener("change", async function () {
//         const selectedCharacterId = this.value;

//         // Fetch individual character data
//         const request = await fetch(`https://rickandmortyapi.com/api/character/${selectedCharacterId}`);
//         const data = await request.json();

//         // Update the image source
//         characterImage.src = data.image;
//       });

//       console.log(data);
//     } catch (err) {
//       console.error("Error", err);
//     }
//   });
// })();
(async function () {
  
  const response = await axios({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
  });

  const dropdown = document.querySelector("#dropdown");

  response.data.results.forEach((character) => {
    // console.log(character.id);
    // <option value="_____">______</option>
    const option = document.createElement("option");
    option.text = character.name;
    option.value = character.id;
    dropdown.appendChild(option);
  });

  dropdown.addEventListener("change", async (e) => {
    // const 
    console.log(e.target.value);
    const Image = document.querySelector("#Image");
    const heading = document.querySelector('#title-head');
   
const request = await fetch(`https://rickandmortyapi.com/api/character/${e.target.value}`);
    
    console.log(request);
    const data = await request.json();

    Image.src = data.image;
    heading.textContent = data.name;
    console.log(Image.src);

  });
})();