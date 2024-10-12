

// child, parent

const idAnithig = document.getElementById('anything');

console.log(idAnithig)
console.log(idAnithig.firstChild)
console.log(idAnithig.parentElement)
console.log(idAnithig.childNodes[1].childNodes)
console.log(idAnithig.childNodes[1].childNodes[3])
console.log(idAnithig.childNodes[1].childNodes[3].nextSibling)
console.log(idAnithig.childNodes[1].childNodes[3].previousSibling)



// creat by js 

console.log(document.createElement('list'))

const listGet = document.createElement('li')

listGet.innerText= 'brand New Place to go';
console.log(listGet)




// append - mane add kora, onnekta push er motho kaj kore.

console.log(anything)

const addign = anything.appendChild(listGet)
console.log(addign);

