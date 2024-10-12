
// 1. where to add
const placesList = document.getElementById('nice-bons');
console.log(placesList);

// 2. what to be added
const liCrt = document.createElement('li');
liCrt.innerText = "paharbon";

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
const sections = document.createElement('section');

const heading1 = document.createElement('h1');
heading1.innerText = 'My Food List';
sections.appendChild(heading1);

const ulist = document.createElement('ul');
const li1 = document.createElement("li");
li1.innerText = ('biriany1');
ulist.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = ('biriany2');
ulist.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = ('biriany3');
ulist.appendChild(li3);


sections.appendChild(ulist);

mainContainer.appendChild(sections);

// console.log(sections);     





// set innerHtml directly


const sectionAdded = document.createElement('section');
sectionAdded.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li style = 'color: red' >my some dresses here cap1</li>
    <li>my some dresses here cap2</li>
    <li>my some dresses here cap3</li>
    <li>my some dresses here cap5</li>
    <li>my some dresses here cap4</li>
</ul>
`
mainContainer.appendChild(sectionAdded)









