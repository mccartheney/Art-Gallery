import getData from "../getData/getData.js";

class allArts {
    constructor (data) {
        //create var where all html arts will be
        let htmlElements = [];

        //get where all html arts will we appended
        const mainElement = document.querySelector(".main_allArts_arts");

        //loop through arts
        for (const art of data) {
            //create new html art element
            const newArtElement = this.createContentDiv(art.image, art.title, art.artist, art.medium);

            //add this html art to htmlElements
            htmlElements.push(newArtElement)
        }

        //loop through html arts
        for (const element of htmlElements) {
            //append that html art to mainElement
            mainElement.appendChild(element);
        }
    }

    createImageContent(imageUrl) {
        //creating image div
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("main_allArts_arts_art_image")

        //creating div 
        const image = document.createElement("img");
        image.classList.add("image")
        image.setAttribute("src", `../../src${imageUrl}`)
        console.log(imageUrl);
        //appending image to imageDiv
        imageDiv.appendChild(image)

        return imageDiv;
    }

    createTextContent (name, author, material) {
        //create textContentDiv
        const textContentDiv = document.createElement("div");
        textContentDiv.classList.add("main_allArts_arts_art_textContent");

        //create header
        const header = document.createElement ("h1")
        header.classList.add("main_allArts_arts_art_textContent-h1");
        header.textContent = name;

        //create author p
        const authorP = document.createElement("p");
        authorP.classList.add("main_allArts_arts_art_textContent-p--author");
        authorP.textContent = author;

        //create material p
        const materialP = document.createElement ("p");
        materialP.classList.add("main_allArts_arts_art_textContent-p--material");
        materialP.textContent = material;

        //appending all h and p's in textContentDiv
        textContentDiv.appendChild(header);
        textContentDiv.appendChild(authorP);
        textContentDiv.appendChild(materialP);

        return textContentDiv;
    }

    createButton () {
        //create button
        const button = document.createElement("button");
        button.setAttribute("id", "showDetails")
        button.textContent = "Find out more >";

        return button;
    }

    createContentDiv (url, name, author, material) {
        //create mainDiv
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("main_allArts_arts_art");

        //append all content to mainDiv
        mainDiv.appendChild(this.createImageContent(url))
        mainDiv.appendChild(this.createTextContent(name, author, material));
        mainDiv.appendChild(this.createButton())

        return mainDiv;
    }
}

export default allArts;