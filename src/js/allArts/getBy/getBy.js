import createArt from "../createArt/createArt.js";

class getBy extends createArt{
    constructor (data, atribute) {
        super()
        this.data = data;
        this.atribute = atribute
        this.createPopUP()
    }

    createPopUP () {
        const popUp = document.createElement("div");
        for (const obj of this.data) {
            const nameOfAtribute = document.createElement("button");
            nameOfAtribute.textContent = obj[this.atribute];
            nameOfAtribute.onclick = () => this.newArts(nameOfAtribute.textContent, this.atribute)
            popUp.appendChild(nameOfAtribute)
        } 

        document.body.appendChild(popUp)
    }

    newArts (nameAtribute, atribute) {
        const divToPlaceArts = document.querySelector(".main_allArts_arts")
        divToPlaceArts.innerHTML =""
        for (const obj of this.data) {
            if (obj[atribute] == nameAtribute) {
                const newArt = this.createContentDiv(obj.image, obj.artist, obj.artist, obj.medium, obj.type);
                console.log(newArt);
                divToPlaceArts.appendChild(newArt)
            }
        }
    }
    
}

export default getBy