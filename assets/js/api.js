/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

const api_key = "2e53eec10ac3a47083594e6b29791954";
/**
 * Fetch data from api
 * @param {string} URL 
 * @param {function} callback 
 */



export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data =>  callback(data))
}

export const url ={
    currentWeather(lat, long){
        return`https://api.openweathermap.org/data/2.5/weather?${lat}&${long}&units=metric`
    },

    forecast(lat, long){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${long}&units=metric`
    },
    airPollution(lat, long){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${long}`;
    },
    reverseGeo(lat, long){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${long}&limit=5`
    },
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}}&limit=5`
    }

}