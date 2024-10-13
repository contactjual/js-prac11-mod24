
// process no2

function makeRed() {
    document.body.style.backgroundColor = 'red';
}





// process no3   --   final option sometimes

const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';

    // or 

    // makeBlueButton.onclick = function makeBlue() {
    //     document.body.style.backgroundColor = 'blue';

}





// process no4

const pinkButton = document.getElementById('make-pink');

pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// or 

// pinkButton.addEventListener('click', function makePink() {
//     document.body.style.backgroundColor = 'pink';
// })



// final option or procces4 another

// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod'
})








