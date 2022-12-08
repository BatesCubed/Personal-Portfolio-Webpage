import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber} from '../utils/index.html'

const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')
const shipArea = document.querySelector('.shipArea')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')

closeButton.addEventListener('click', () => {
    modal.classList.toggle('is-active')
})

function populateNav() {
    starships.forEach((starship) => {
        let anchor = document.createElement('a')
        anchor.textContent = starship.name
        anchor.href= '#'

        anchor.addEventListener('click', () => populateShipArea(starship))

        let listItem = document.createElement('li')
        listItem.appendChild(anchor)
        navList.appendChild(listItem)
    })
}

function populateShipArea(shipData) {
    //removes children before adding more
    removeChildren(shipArea)
    const shipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)

    shipImage.src = 'https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg'

    shipImage.addEventListener('error', () => {
        console.log('WE got an image loading error!')
        shipImage.hidden = true
        modal.classList.toggle('is-active')
    })

    shipArea.appendChild(shipImage)
}

populateNav()