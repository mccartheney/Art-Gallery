import createArt from "../createArt/createArt.js";

class getBy extends createArt{
    constructor (data, atribute) {
        super()
        this.data = data;
        this.atribute = atribute
        this.createPopUP()
    }

    deleteDuplicate (array) {
        const newArray = array.reduce((accumulator, currentValue) => {
            if (!accumulator.includes(currentValue)) {
                accumulator.push(currentValue);
            }
            return accumulator;
        }, []);

        return newArray;
    }

    //method to create popUp
    createPopUP () {

        //createPopUpContainer
        const popUpContainer = document.createElement("div");
        popUpContainer.classList.add("popUpContainer")

        //create popUp
        const popUp = document.createElement("div");
        popUp.classList.add ("popUp");

        const header = document.createElement("h1");
        header.textContent = `${this.atribute}s`;

        popUp.appendChild(header)

        //array to get names of atributes
        let allThisAtribute = [];

        //loop through data
        for (const obj of this.data) {allThisAtribute.push(obj[this.atribute])} 

        //filter array of duplicate items
        allThisAtribute = this.deleteDuplicate(allThisAtribute);

        //loop to filtered data
        for (const nameOfAtributes of allThisAtribute) {
            //create button
            const nameOfAtributeButton = document.createElement("button");
            nameOfAtributeButton.textContent = nameOfAtributes;

            //in click button update arts
            nameOfAtributeButton.onclick = () => this.newArts(nameOfAtributeButton.textContent, this.atribute)

            //append button to popUp
            popUp.appendChild(nameOfAtributeButton)
        }

        //append popUp to popUpContainer
        popUpContainer.appendChild(popUp)

        //append popUpToBody
        document.body.appendChild(popUpContainer)
    }

    newArts (nameAtribute, atribute) {
        document.querySelector(".popUpContainer").remove()

        const divToPlaceArts = document.querySelector(".main_allArts_arts")
        divToPlaceArts.innerHTML =""

        for (const obj of this.data) {
            if (obj[atribute] == nameAtribute) {
                const newArt = this.createContentDiv(obj.image, obj.artist, obj.artist, obj.medium, obj.type);
                divToPlaceArts.appendChild(newArt)
            }
        }
    }
    
}

export default getBy