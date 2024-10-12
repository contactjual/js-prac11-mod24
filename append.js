
// 1. where to add
const placesList = document.getElementById('nice-bons');
console.log(placesList);

// 2. what to be added
const liCrt = document.createElement('li');
liCrt.innerText="paharbon";

// 3. add the child
const added = placesList.appendChild(liCrt);

console.log(added);




// html main er moddhe add 

// 1. where to add
// const maincontainer = document.getElementById('main-container');

// 2. what to be added 
// const sections =document.createElement('section');
// const heading1 = document.createElement('h1');
// heading1.innerText= 'My Food List';
// sections.appendChild(heading1);

// maincontainer.appendChild(sections);

// console.log(sections)



// 1. where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added 
const sections = document.createElement('section');    // Create a section element
const heading1 = document.createElement('h1');         // Create an h1 element
heading1.innerText = 'My Food List';                   // Set the text content for the h1
sections.appendChild(heading1);                        // Append h1 inside the section

mainContainer.appendChild(sections);                   // Append section to main-container

console.log(sections);                                 // Log the section element to the console
