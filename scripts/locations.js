import { locations } from './database.js'

export const locationsList = () => {
    // Invoke the function that you imported from the database module
    const places = locations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="LocationList">'

    // Create HTNL representations of each fish here
    for (const place of places) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="placeCard">
        <div><img  class="location__image image--card" src="${place.image}" /></div>
        <div class="location__name">${place.place}</div>
    </section>`
    }
    htmlString += `</article>`

    return htmlString
}