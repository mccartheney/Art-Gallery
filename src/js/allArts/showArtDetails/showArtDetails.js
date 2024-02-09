class showArtDetails {
    constructor (url,artName, authorName, medium, type) {
        this.imageUrl = url;
        this.artName = artName;
        this.authorName = authorName;
        this.medium = medium;
        this.type = type;

        document.querySelector(".main_allArts").style.display = "none";
        document.querySelector(".showArtDetail").style.display = "auto";
        this.appendContent()
    }

    createImageContent () {
        //create image div
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("showArtDetail_image");

        //create image
        const image = document.createElement("img");
        image.setAttribute("src", `../../../src${this.imageUrl}`);
        image.setAttribute("alt", `${this.artName}`);

        //append image to imageDiv
        imageDiv.appendChild(image);

        return imageDiv;
    }

    createTextContent () {
        //creating textContent
        const textContent = document.createElement("div");
        textContent.classList.add("showArtDetail_textContent");

        //creating header
        const header = document.createElement("h1");
        header.textContent = this.artName;

        //creating authorName
        const authorName = document.createElement("p");
        authorName.classList.add("authorDetail");
        authorName.textContent = this.authorName;

        //creating mediumName
        const mediumName = document.createElement("p");
        mediumName.classList.add("mediumDetail");
        mediumName.textContent = this.medium;

        //creating typeName
        const typeName = document.createElement("p");
        typeName.classList.add("typeDetail");
        typeName.textContent = this.type;

        //appending all elements to textContent
        textContent.appendChild(header);
        textContent.appendChild(authorName);
        textContent.appendChild(mediumName);
        textContent.appendChild(typeName);

        return textContent
    }

    createExitButton () {
        const button = document.createElement("button");
        button.textContent = "X";

        button.onclick = () => {
            document.querySelector(".main_allArts").style.display = "block";
            document.querySelector(".showArtDetail").innerHTML = "";
        }

        return button;
    }

    appendContent() {
        const content = document.querySelector(".showArtDetail");
        content.append(this.createTextContent())
        content.append(this.createImageContent())
        content.append (this.createExitButton());
    }
}

export default showArtDetails