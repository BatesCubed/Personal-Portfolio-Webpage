import { ringObj } from '../data/items.js'

var ringShop = document.querySelector('#ringSection')

const backFocus = document.querySelector('.backgroundFocus')
const itemFocus = document.querySelector('.itemFocus')
const exitButton = document.querySelector('.xButton')
const cart = document.querySelector('.addToCart')
const cartInv = [];
const cartAmt = document.querySelector('.amount')

exitButton.addEventListener('click', () => {
    backFocus.style.display = "none";
    itemFocus.style.display = "none";
})



for (let i = 0; i < ringObj.length; i++) {
    const figure = document.createElement('figure')
    const figImg = document.createElement('img')
    const figCaption = document.createElement('figcaption')
    const figP = document.createElement('p')
    const ringNum = ringObj[i].ringNum
    

    figImg.src = ringObj[i].ringImg

    figCaption.textContent = ringObj[i].ringName
    figP.textContent = '$' + ringObj[i].ringPrice
    
    figure.appendChild(figP)
    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    ringShop.appendChild(figure)
    figure.classList.toggle(ringNum)

    

    figure.addEventListener('click', () => {
        backFocus.style.display = "inline";
        itemFocus.style.display = "inline";
   
   
        const ringNum = figure.className
        const focusName = document.querySelector('.ringName')
        const focusImg = document.querySelector('.ringImage')
        const focusDesc = document.querySelector('.ringDesc')
        const focusPrice = document.querySelector('.ringPrice')
        


        focusName.textContent = ringObj[ringNum].ringName
        focusImg.src = ringObj[ringNum].ringImg
        focusDesc.textContent = ringObj[ringNum].ringDesc
        focusPrice.textContent = '$' + ringObj[ringNum].ringPrice

        cart.addEventListener('click', () => {
            cartInv.push(ringObj[ringNum])
            cartAmt.textContent = cartInv.length
            return cartInv.length
        })
    })
}


const cartView = document.querySelector('.cartSection')

for (let i = 0; i < cartInv.length; i++) {
    const cartFigure = document.createElement('figure')
    const cartImg = document.createElement('img')
    const cartName = document.createElement('h1')
    const cartPrice = document.createElement('p')
    const cartTotal = document.createElement('p')
    

    cartImg.src = cartInv[i].ringImg
    cartName.textContent = cartInv[i].ringName
    cartPrice.textContent = cartInv[i].ringPrice
    
    cartFigure.appendChild(cartImg)
    cartFigure.appendChild(cartName)
    cartFigure.appendChild(cartPrice)
    cartView.appendChild(cartFigure)

}
 
