import allArts from "./allArts/allArts.js";
import getBy from "./allArts/getBy/getBy.js";
import getData from "./getData/getData.js";
import topArts from "./topArts/topArts.js";

window.onload = () => {
    //get data from data.json
    getData().then (data => {
        //active topArts
        new topArts(data)

        //active AllArts
        new allArts(data)


        //iniciatilize getBy by what button have been pressed
            //click authors
        document.querySelector(".authors").addEventListener("click", () => { new getBy(data, "artist") });
            //click types
        document.querySelector(".types").addEventListener("click", () => { new getBy(data, "type") });
            //click materials
        document.querySelector(".materials").addEventListener("click", () => { new getBy(data, "medium")});

    })

};