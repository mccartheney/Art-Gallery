import showArtDetails from "../showArtDetails/showArtDetails.js";

class createArt {
    contructor() {
        
    }

    createImageContent(url) {
        //creating image div
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("main_allArts_arts_art_image")

        //creating div 
        const image = document.createElement("img");
        image.classList.add("image")
        image.setAttribute("src", `../../src${url}`)
        //appending image to imageDiv
        imageDiv.appendChild(image)

        return imageDiv;
    }

    createTextContent(name, author, material) {
        //create textContentDiv
        const textContentDiv = document.createElement("div");
        textContentDiv.classList.add("main_allArts_arts_art_textContent");

        //create header
        const header = document.createElement("h1")
        header.classList.add("main_allArts_arts_art_textContent-h1");
        header.textContent = name;

        //create author p
        const authorP = document.createElement("p");
        authorP.classList.add("main_allArts_arts_art_textContent-p--author");
        authorP.textContent = author;

        //create material p
        const materialP = document.createElement("p");
        materialP.classList.add("main_allArts_arts_art_textContent-p--material");
        materialP.textContent = material;

        //appending all h and p's in textContentDiv
        textContentDiv.appendChild(header);
        textContentDiv.appendChild(authorP);
        textContentDiv.appendChild(materialP);

        return textContentDiv;
    }

    createButton(url, name, author, material, type) {
        //create button
        const button = document.createElement("button");
        button.setAttribute("id", "showDetails")
        button.textContent = "Find out more >";

        button.onclick = () => { new showArtDetails(url, name, author, material, type) }

        return button;
    }

    createContentDiv(url, name, author, material, type) {
        //create mainDiv
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("main_allArts_arts_art");
        mainDiv.setAttribute("data-aos", "flip-down");

        //append all content to mainDiv
        mainDiv.appendChild(this.createImageContent(url))
        mainDiv.appendChild(this.createTextContent(name, author, material));
        mainDiv.appendChild(this.createButton(url, name, author, material, type))

        return mainDiv;
    }
}

export default createArt;