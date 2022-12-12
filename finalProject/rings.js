import { ringObj } from '../data/items.js'

let ringShop = document.querySelector('#ringSection')

const backFocus = document.querySelector('.backgroundFocus')
const itemFocus = document.querySelector('.itemFocus')

for (let i = 0; i < ringObj.length; i++) {
    const figure = document.createElement('figure')
    const figImg = document.createElement('img')
    const figCaption = document.createElement('figcaption')
    const figP = document.createElement('p')

    figImg.src = ringObj[i].ringImg

    figCaption.textContent = ringObj[i].ringName
    figP.textContent = '$' + ringObj[i].ringPrice
    figure.appendChild(figP)
    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    ringShop.appendChild(figure)
    
    figure.addEventListener('click', () => {
        backFocus.style.display = "inline";
        itemFocus.style.display = "inline";
    })
}
