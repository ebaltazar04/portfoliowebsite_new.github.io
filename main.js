let skillSets = document.getElementById('skill');
let popOne = skillSets.getElementsByTagName('div')[0];
let imageHTML = popOne.getElementsByTagName('img')[0];


function skillOne() {
    popOne.style.height = '13rem';
    popOne.style.width = '13rem';
    popOne.style.display = 'flex';
    popOne.style.justifyContent = 'center';
    imageHTML.style.marginLeft = '34%';
}

function removePopOne() {
    popOne.style.height = '11rem';
    popOne.style.width = '9rem';
    popOne.style.display = 'flex';
    popOne.style.justifyContent = 'center';
    imageHTML.style.marginLeft = '28%';
}

popOne.addEventListener('mouseover', skillOne);
popOne.addEventListener('mouseleave', removePopOne);

// console.log(skillSets);
// console.log(pop);
// console.log(popOne);
