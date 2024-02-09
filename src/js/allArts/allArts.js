import createArt from "./createArt/createArt.js";

class allArts extends createArt{
    constructor (data) {
        super()
        //create var where all html arts will be
        let htmlElements = [];

        //get where all html arts will we appended
        const mainElement = document.querySelector(".main_allArts_arts");

        //loop through arts
        for (const art of data) {
            //create new html art element
            const newArtElement = this.createContentDiv(art.image, art.title, art.artist, art.medium, art.type);

            //add this html art to htmlElements
            htmlElements.push(newArtElement)
        }

        //loop through html arts
        for (const element of htmlElements) {
            //append that html art to mainElement
            mainElement.appendChild(element);
        }
    }


}

export default allArts;