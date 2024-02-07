import getData from "./getData/getData.js";


window.onload = () => {
    //get all art classes
    getData().then(arrayOfArts => {
        console.log(arrayOfArts);
    })
};