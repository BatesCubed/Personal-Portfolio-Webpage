import { ringObj } from '../data/items.js'

let ringShop = document.querySelector('#ringSection')

for (let i = 0; i < ringObj.length; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')

    figImg.src = ringObj[i].ringImg

    figCaption.textContent = ringObj[i].ringName

    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    ringShop.appendChild(figure)
}
