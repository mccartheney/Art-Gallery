//array where all classes will be
let arrayOfArtClass = []

class artClass {
    constructor(title, type, medium, image, artist) {
        this.title = title;
        this.type = type;
        this.medium = medium;
        this.image = image;
        this.artist = artist;
    }
}

//async function that will return the data 
const getData = async() => {
    //fetch data.json
    const response = await fetch("./../../data.json");
    //trandform all data in json
    const data = await response.json();

    console.log("here");
    //loop throught data
    for (const art of data) {
        //in each art create a art class
        const newArt = new artClass(
            art.title,
            art.type,
            art.medium,
            art.image,
            art.artist
        )
        //push that artClass to arrayOfArtClass
        arrayOfArtClass.push(newArt)
    }
    return arrayOfArtClass;
}

export default getData;