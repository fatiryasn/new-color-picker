const hex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const hammenu = document.querySelector('.hamMenu')
const history = document.querySelector('.history')
const menu = document.querySelector('.menu')
const random = document.querySelector('.random')
const color = document.querySelector('.color')
const listHistory = document.querySelector('.historyList')
const lineHistoryCon = document.querySelector('.lineHistoryCon')
const container = document.querySelector('.container')


history.addEventListener('click', function(){
    listHistory.classList.toggle('active')
    console.log('history clicked')
    const clear = document.querySelector('.clear')
    clear.classList.toggle('active')
    clear.addEventListener('click', function(){
    while(lineHistoryCon.firstChild){
        lineHistoryCon.removeChild(lineHistoryCon.firstChild)
    }
})
})
hammenu.addEventListener('click', function(){
    menu.classList.toggle('active')
    console.log('hammenu clicked')
})

random.addEventListener('click', function(){
    let hexColor = "#"
    for(let i = 0; i<6; i++){
    hexColor += hex[getRandomColor()]}

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    console.log('random clicked')

    const newLine = document.createElement('p')
    const newButton = document.createElement('button')
    newLine.innerHTML = hexColor
    newButton.innerHTML = 'View'
    newButton.classList.add('jsButton')
    newButton.addEventListener('click', function(){
        document.body.style.backgroundColor = hexColor
        color.textContent = hexColor
        console.log('jsbutton clicked')
    })
    lineHistoryCon.appendChild(newLine)
    lineHistoryCon.appendChild(newButton)
})

function getRandomColor(){
    return Math.floor(Math.random() * hex.length)
}

function copyTextToClipboard() {
    const textRange = document.createRange();
    textRange.selectNode(color);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(textRange);
    document.execCommand("copy");
    selection.removeAllRanges();

    alert("Copied to clipboard!");
}

const copyButton = document.querySelector(".copy");
copyButton.addEventListener("click", copyTextToClipboard);