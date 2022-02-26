const elements = {
    output: document.querySelector('.output__text'),
    generateBtn: document.querySelector('.generateBtn')
}

const messageComponents = {
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    luck: ['Luckiest', 'Lucky', 'Sorta-Lucky', 'Unlucky', 'Unluckiest'],
}

function generate(){
    let randomDay = Math.floor(Math.random() * messageComponents.day.length);
    let randomLuck = Math.floor(Math.random() * messageComponents.luck.length);
    return elements.output.innerHTML = `You will be the ${messageComponents.luck[randomLuck]} person on ${messageComponents.day[randomDay]}`;
};

elements.generateBtn.addEventListener('click', generate);