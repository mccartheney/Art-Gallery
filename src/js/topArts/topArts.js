import getData from "../getData/getData.js";

//initialize class top arts
class topArts {
    constructor () {
        //get data from data.json
        getData().then(data => {
            //atribute that data to arrayOfArts
            this.arrayOfArts = data;

            //get first 3 elements of array of arts
            const firstsElements = this.first3elements(this.arrayOfArts);

            //array for html elements of 3 first arts
            let arrayOf3Arts = [];

            //loop through the first 3 arts
            for (const i in firstsElements) {
                //create vars to put in the html element
                let newImage = firstsElements[i].image;
                let nElement = `0${Number(i)+1}`;
                let newName = firstsElements[i].title;
                let newAuthor = firstsElements[i].artist;

                //create top art with the vars above
                let newTopArt = this.createTopArt(newImage, nElement, newName, newAuthor);

                //add html element to html array
                arrayOf3Arts.push(newTopArt);
            }

            for (const htmlElement of arrayOf3Arts) {
                document.querySelector(".main_welcome_topArts").appendChild(htmlElement)
            }
        })
    }

    first3elements (array) {
        let ThreeElements = [];

        for (let i = 0; i < 3; i++) {
            const element = array[i];
            ThreeElements.push(element);
        }

        return ThreeElements;
    }

    createTopArt (imageUrl, nElement, name, author) {
        //create top art div
        const topArtDiv = document.createElement("div");
        topArtDiv.classList.add("main_welcome_topArts_topArt");

        //appending elements to topArtDiv
        topArtDiv.appendChild(this.createTextContent(nElement, name, author));
        topArtDiv.appendChild(this.createImageContent(imageUrl));

        return topArtDiv;
    }

    createImageContent (imageUrl) {
        //create image div
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("main_welcome_topArts_topArt_image")

        //create image 
        const image = document.createElement("img");
        image.setAttribute("src", `../../src${imageUrl}`);
        image.setAttribute("alt", "art image");

        //appending image to div
        imageDiv.appendChild(image);

        return imageDiv;
    }

    createTextContent (nElement, name, author) {
        //textContentDiv
        const textContentDiv = document.createElement("div");
        textContentDiv.classList.add("main_welcome_topArts_topArt_textContent");

        //header of textContent
        const textContentHeaderDiv = document.createElement("div");
        textContentHeaderDiv.classList.add("main_welcome_topArts_topArt_textContent_header");

        //header text
        const header = document.createElement ("h1");
        header.textContent = nElement;

        //info of textContent
        const textContentInfoDiv = document.createElement("div");
        textContentInfoDiv.classList.add("main_welcome_topArts_topArt_textContent_info")

        //name of the art
        const nameOfArt = document.createElement("p");
        nameOfArt.classList.add("main_welcome_topArts_topArt_textContent_info-name");
        nameOfArt.textContent = name;

        //name of the author
        const authorOfArt = document.createElement("p");
        authorOfArt.classList.add("main_welcome_topArts_topArt_textContent_info-author");
        authorOfArt.textContent = author;

        //appending header element
        textContentHeaderDiv.appendChild(header);

        //appeding info elements
        textContentInfoDiv.appendChild(nameOfArt);
        textContentInfoDiv.appendChild(authorOfArt);

        //appending to textContent
        textContentDiv.appendChild(textContentHeaderDiv);
        textContentDiv.appendChild(textContentInfoDiv);

        return textContentDiv;
    }
}


export default topArts;