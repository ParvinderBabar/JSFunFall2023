
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * show a thank message with the plan's name inside of the aqua green notification at the top of the screen.
   *
   * For example, if the user chooses "Premium", display:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
// Write your answer here

const allbuttons = document.querySelectorAll(".button");
     const notificationBox = document.querySelector("#notification");
     const notification = document.querySelector("#notificationMessage");

        // Add click event listener to each button
        allbuttons.forEach(function (button) {
          button.addEventListener("click", function () {
            console.log(button);
            notificationBox.style.display = "block";
            notification.textContent = "Thank you for selecting the " + button.id + " plan!";
  })
});




