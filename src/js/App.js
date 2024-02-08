import allArts from "./allArts/allArts.js";
import getData from "./getData/getData.js";
import topArts from "./topArts/topArts.js";

window.onload = () => {
    //get data from data.json
    getData().then (data => {
        //active topArts
        new topArts()

        //active AllArts
        new allArts(data)
    })

};