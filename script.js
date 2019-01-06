// /* If you're feeling fancy you can add interactivity 
//     to your site with Javascript */

// // prints "hi" in the browser's dev tools console
// console.log('hi');

let submitButton = document.getElementById('submit-button');

console.log(submitButton);

submitButton.addEventListener("click", (event) => {
    console.log('Hello')
})