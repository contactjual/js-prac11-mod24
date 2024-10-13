
// process no2

function makeRed() {
    document.body.style.backgroundColor = 'red';
}





// process no3

const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';

// or 

// makeBlueButton.onclick = function makeBlue() {
//     document.body.style.backgroundColor = 'blue';

}