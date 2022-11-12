import './style/style.css'
import Logo from '/ceptree.svg'
import { RedBlackTree } from './core/RedBlackTree';



const get = e => document.querySelector(e); //obtém um elemento
const gets = e => document.querySelectorAll(e); //obtém uma lista de elementos

const headerElement = get('header h1:nth-child(2)')
var logoElement = document.createElement('img')
logoElement.src = Logo
headerElement.append(logoElement)

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

import { getDataObject } from './component/readcep'

const itens = await getDataObject(5)
console.log(itens)

// const tree = new RedBlackTree();
// var node0 = tree.insert(1);
// var node1 = tree.insert(8);
// var node2 = tree.insert(6);
// var node3 = tree.insert(11);
// var node4 = tree.insert(13);
// var node5 = tree.insert(17);
// var node6 = tree.insert(15);
// var node7 = tree.insert(25);
// var node8 = tree.insert(22);
// var node9 = tree.insert(27);

// var func = function(x) {
//     console.log(x)
// }

// tree.inOrderTraverse(func)


import { Address } from './core/Address'

var address_example = new Address({
    city: "Floriano/PI",
    street: "BR 343, s/n",
    neighborhood: "Campo Velho",
    zipCode: "64002150"
})

address_example.print()

const tree = new RedBlackTree();
var node0 = tree.insert(address_example);
console.log(tree.count)