import { ringObj } from '../data/items.js'
import { removeChildren } from '../utils/index.js'

const ringShop = document.querySelector('#ringSection')

const backFocus = document.querySelector('.backgroundFocus')
const itemFocus = document.querySelector('.itemFocus')
const exitButton = document.querySelector('.xButton')
const cart = document.querySelector('.addToCart')
const cartInv = [];
const cartAmt = document.querySelector('.amount')
const ringSelectionTitle = document.querySelector('.ringSelectionTitle')

//All ring filter code
const allButton = document.querySelector('.allRings')
allButton.addEventListener('click', () => {
    allButton.style.backgroundColor = "#0a84b4"
    acrylicButton.style.backgroundColor = "#000000"
    hybridButton.style.backgroundColor = "#000000"
    diamondButton.style.backgroundColor = "#000000"
    woodButton.style.backgroundColor = "#000000"
    populateRingDOM(ringObj)
})
//Wood ring filter code
const woodRings = ringObj.filter((ringObj) => ringObj.ringGroup === 'Wood')
const woodButton = document.querySelector('.woodRings')
woodButton.addEventListener('click', () => {
    allButton.style.backgroundColor = "#000000"
    acrylicButton.style.backgroundColor = "#000000"
    hybridButton.style.backgroundColor = "#000000"
    diamondButton.style.backgroundColor = "#000000"
    woodButton.style.backgroundColor = "#0a84b4"
    populateRingDOM(woodRings)
    ringSelectionTitle.textContent = "Wood Rings"
})


//Acrylic Ring Filter Code
    const acrylicRings = ringObj.filter((ringObj) => ringObj.ringGroup === 'Acrylic')
    const acrylicButton = document.querySelector('.acrylicRings')
    acrylicButton.addEventListener('click', () => {
        allButton.style.backgroundColor = "#000000"
        acrylicButton.style.backgroundColor = "#0a84b4"
        hybridButton.style.backgroundColor = "#000000"
        diamondButton.style.backgroundColor = "#000000"
        woodButton.style.backgroundColor = "#000000"
        populateRingDOM(acrylicRings)
        ringSelectionTitle.textContent = "Acrylic Rings"
    })
//Hybrid Ring Fitler Code
const hybridRings = ringObj.filter((ringObj) => ringObj.ringGroup === 'Hybrid')
const hybridButton = document.querySelector('.hybridRings')
hybridButton.addEventListener('click', () => {
    allButton.style.backgroundColor = "#000000"
    acrylicButton.style.backgroundColor = "#000000"
    hybridButton.style.backgroundColor = "#0a84b4"
    diamondButton.style.backgroundColor = "#000000"
    woodButton.style.backgroundColor = "#000000"
    populateRingDOM(hybridRings)
    ringSelectionTitle.textContent = "Hybrid Rings"
})
//DiamondCastRings Filter Code
const diamondCastRings = ringObj.filter((ringObj) => ringObj.ringGroup === 'DiamondCast')
const diamondButton = document.querySelector('.diamondRings')
diamondButton.addEventListener('click', () => {
    allButton.style.backgroundColor = "#000000"
    acrylicButton.style.backgroundColor = "#000000"
    hybridButton.style.backgroundColor = "#000000"
    diamondButton.style.backgroundColor = "#0a84b4"
    woodButton.style.backgroundColor = "#000000"
    populateRingDOM(diamondCastRings)
    ringSelectionTitle.textContent = "Diamond Cast Rings"
})













exitButton.addEventListener('click', () => {
    backFocus.style.display = "none";
    itemFocus.style.display = "none";
})


/*function populateRingDOM() {
    removeChildren(ringShop)
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
}*/

function populateRingDOM(ringObj) {
    removeChildren(ringShop)
    ringSelectionTitle.textContent = ("All Rings")
ringObj.forEach((ringObj) => {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    let figP = document.createElement('p')
    let ringNum = ringObj.ringNum

    

    figImg.src = ringObj.ringImg

    figCaption.textContent = ringObj.ringName
    figP.textContent = '$' + ringObj.ringPrice
    
    figure.appendChild(figP)
    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    ringShop.appendChild(figure)
    figure.classList.toggle(ringNum)

    

    figure.addEventListener('click', () => {

        backFocus.style.display = "inline";
        itemFocus.style.display = "inline";
   
        let focusName = document.querySelector('.ringName')
        let focusImg = document.querySelector('.ringImage')
        let focusDesc = document.querySelector('.ringDesc')
        let focusPrice = document.querySelector('.ringPrice')
        


        focusName.textContent = ringObj.ringName
        focusImg.src = ringObj.ringImg
        focusDesc.textContent = ringObj.ringDesc
        focusPrice.textContent = '$' + ringObj.ringPrice

        cart.addEventListener('click', () => {
            cartInv.push(ringObj)
            cartAmt.textContent = cartInv.length
            return cartInv.length
        })
    })
})
}

populateRingDOM(ringObj);