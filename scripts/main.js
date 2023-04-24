import { tipList } from './tips.js'
import { FishList } from './FishList.js'
import { locationsList } from './locations.js'

const allFish = FishList()
for (const fish of allFish) {
    console.log(fish)
}

const fishListHTMLElement = document.querySelector(".listOfFish")
fishListHTMLElement.innerHTML = FishList()

const fishInsights = tipList()
for (const tip of fishInsights) {
    console.log(tip)
}

const tipListHTMLElement = document.querySelector(".travelTips")
tipListHTMLElement.innerHTML = tipList()

const locationInsights = locationsList()
for (const place  of locationInsights) {
    console.log(place)
}

const placeListHTMLElement = document.querySelector(".places")
placeListHTMLElement.innerHTML = locationsList()