//----start Imports

//all arts is the class which have the function call and show all arts
import allArts from "./allArts/allArts.js";

//getBy(Something) have the function to call arts by (something) and show them
import getBy from "./allArts/getBy/getBy.js";
import getData from "./getData/getData.js";
import topArts from "./topArts/topArts.js";

//npm module which suffle one array 
import { shuffle } from '../../node_modules/@chazzy13/shuffle/index.mjs'; 
import getAll from "./allArts/getAll/getAll.js";


//end imports

//---- Start Main Section
window.onload = () => {
    //get data from data.json
    getData().then (data => {

        //suffle data
        let newData = shuffle(data);
        let newDataForAll = shuffle(data);

        //active topArts
        new topArts(newData)

        //active AllArts
        new allArts(newDataForAll)
        document.querySelector(".All").addEventListener("click", () => { new getAll(new allArts(newDataForAll)) });;


        //iniciatilize getBy by what button have been pressed
            //click authors
        document.querySelector(".Artists").addEventListener("click", () => { new getBy(data, "artist") });
            //click types
        document.querySelector(".Types").addEventListener("click", () => { new getBy(data, "type") });
            //click materials
        document.querySelector(".Mediums").addEventListener("click", () => { new getBy(data, "medium")});

    })

};

//end Main Section