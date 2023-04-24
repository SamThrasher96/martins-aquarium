import { tips } from './database.js'

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const fishTips = tips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const tip of fishTips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tipCard">
        <div><img  class="tip__image image--card" src="${tip.image}" /></div>
        <div class="tip_source">${tip.source}</div>
        <div class="tip_tip">${tip.tip}</div>
    </section>`
    }
    htmlString += `</article>`

    return htmlString
}