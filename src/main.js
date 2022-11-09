import './style/style.css'

const get = e => document.querySelector(e); //obtém um elemento
const gets = e => document.querySelectorAll(e); //obtém uma lista de elementos

const homeElement = get('ul li:nth-child(1)')
homeElement.classList.add('selected')

const allHighlightsElements = gets('.highlight')
allHighlightsElements.forEach(e => e.style.borderBottom = "3px solid #ffe9b1");

var name = 'Danilo Borges da Silva'
var pElementNew = document.createElement('p')
pElementNew.innerHTML = `Olá, meu nome é ${name}`
pElementNew.style.fontSize = "0.85rem"
pElementNew.style.textAlign = "right"

var pLastElement = get('#app p:nth-child(n)')
pLastElement.append(pElementNew)

function isSelectedItemMenu(element) {
    return element.classList.contains("selected")
}

var ulElement = get('ul')

ulElement.addEventListener('mouseover', (event) => {
    let elementTarget = event.target
    let liAllElements = gets('ul li')
    liAllElements.forEach(e => {
        e.classList.remove('hover')
        if (e === elementTarget && !isSelectedItemMenu(e)) {
            elementTarget.classList.add('hover')
        }
    })
})

ulElement.addEventListener('mouseout', (event) => {
    let liAllElements = gets('ul li')
    liAllElements.forEach(e => {
        e.classList.remove('hover')
    })
})