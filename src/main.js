import './style/style.css'
import Logo from '/ceptree.svg'
import { RedBlackTree } from './core/RedBlackTree';
import { getDataObject } from './component/readcep'



const get = e => document.querySelector(e); //obtém um elemento
const gets = e => document.querySelectorAll(e); //obtém uma lista de elementos

get("#prepared").remove()
get("#app").classList.remove("hidden")

const headerElement = get('header h1:nth-child(2)')
var logoElement = document.createElement('img')
logoElement.src = Logo
headerElement.append(logoElement)

const tree = new RedBlackTree();




// const keyToSearch = "64211045"

// const find = tree.search(Number(keyToSearch))

// if (find) {
//     var node = tree.getNode(Number(keyToSearch))
//     node.key.print()
// } else {
//     console.log("Não encontrado!")
// }

// console.log(tree.count)

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
import IMask from 'imask';

const cepInput = get("#cep")

const cepInputPattern = {
    mask: "00000-000",
    lazy: true
}
const cepInputMasked = IMask(cepInput, cepInputPattern)


const btnSearch = get("#btnSearch")

btnSearch.addEventListener('click', () => {
    console.log(cepInputMasked.unmaskedValue)
    dataResultDiv.style.display = "none"
    resultP.style.display = "none"

    if (cepInputMasked.unmaskedValue.length !== 8) {
        alert("Insira um CEP válido.")
    } else {
        loaderInsideForm.style.display = "block";
        btnSearch.classList.add("deactivate")
        setTimeout(() => {
            const keyToSearch = cepInputMasked.unmaskedValue

            const find = tree.search(Number(keyToSearch))

            resultP.style.display = "block"

            if (find) {
                var node = tree.getNode(Number(keyToSearch))
                node.key.print()
                resultP.innerText = `CEP ${cepInputMasked.value} encontrado.`
                dataResultDiv.style.display = "block"
                const cepValue = get("#cep .data-value")
                cepValue.innerText = (node.key.zipCode.length == 0) ? "não informado" : node.key.zipCode;
            } else {
                resultP.innerText = `CEP ${cepInputMasked.value} não encontrado.`
            }
            loaderInsideForm.style.display = "none";
            btnSearch.classList.remove("deactivate")
        }, 2000)

    }
})


const mainAppSection = get("#main-app")

mainAppSection.style.display = "none";

const loaderInsideLoadDiv = get("#load .loader")

loaderInsideLoadDiv.style.display = "none";

const datasetButton = get("#search")

const loaderInsideForm = get("#formCEP .loader")

loaderInsideForm.style.display = "none";

const resultP = get("#result")

resultP.style.display = "none"

const dataResultDiv = get("#data-result")

dataResultDiv.style.display = "none"

datasetButton.addEventListener("click", (event) => {
    loaderInsideLoadDiv.style.display = "block";
    datasetButton.classList.add("deactivate")
    getDataObject(tree)
    setTimeout(() => {
        alert(`Foram adicionados ${tree.count} CEPs referentes ao PI, MA e CE.`)
        const datasetSection = get("#dataset")
        datasetSection.style.display = "none"
        mainAppSection.style.display = "block";
    }, 500)

})