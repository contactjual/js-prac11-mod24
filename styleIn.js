
const sectionsStyle = document.querySelectorAll('section')
// console.log(sectionsStyle)

for(const section of sectionsStyle){
    // console.log(section)
    section.style.border='5px solid red'
    section.style.marginBottom='5px'
    section.style.borderRadius='50px'
    section.style.padding='50px'
    section.style.backgroundColor='gray'
}

const aladaKonoSection = document.getElementById('nirdisto');
aladaKonoSection.style.backgroundColor='gold'

const newClass = document.getElementById('let-anything');
newClass.classList.add('somthing');
newClass.classList.add('large-text');
newClass.classList.remove('large-text')