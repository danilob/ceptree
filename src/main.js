import './style/style.css'
import Logo from '/ceptree.svg'
import { RedBlackTree } from './core/RedBlackTree';
import { getDataObject } from './component/readcep'



const get = e => document.querySelector(e); //obtém um elemento
const gets = e => document.querySelectorAll(e); //obtém uma lista de elementos

const headerElement = get('header h1:nth-child(2)')
var logoElement = document.createElement('img')
logoElement.src = Logo
headerElement.append(logoElement)

const tree = new RedBlackTree();

const itens = await getDataObject(5, tree)

console.log(itens)

const keyToSearch = "01001010"

const find = tree.search(Number(keyToSearch))

if (find) {
    var node = tree.getNode(Number(keyToSearch))
    node.key.print()
} else {
    console.log("Não encontrado!")
}

console.log(tree.count)

// const homeElement = get('ul li:nth-child(1)')
// homeElement.classList.add('selected')

// const allHighlightsElements = gets('.highlight')
// allHighlightsElements.forEach(e => e.style.borderBottom = "3px solid #ffe9b1");

// var name = 'Danilo Borges da Silva'
// var pElementNew = document.createElement('p')
// pElementNew.innerHTML = `Olá, meu nome é ${name}`
// pElementNew.style.fontSize = "0.85rem"
// pElementNew.style.textAlign = "right"

// var pLastElement = get('#app p:nth-child(n)')
// pLastElement.append(pElementNew)

// function isSelectedItemMenu(element) {
//     return element.classList.contains("selected")
// }

// var ulElement = get('ul')

// ulElement.addEventListener('mouseover', (event) => {
//     let elementTarget = event.target
//     let liAllElements = gets('ul li')
//     liAllElements.forEach(e => {
//         e.classList.remove('hover')
//         if (e === elementTarget && !isSelectedItemMenu(e)) {
//             elementTarget.classList.add('hover')
//         }
//     })
// })

// ulElement.addEventListener('mouseout', (event) => {
//     let liAllElements = gets('ul li')
//     liAllElements.forEach(e => {
//         e.classList.remove('hover')
//     })
// })