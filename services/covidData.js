const axios = require('axios')
const {parser} = require('stream-json');
const {pick} = require('stream-json/filters/Pick');
const fs = require('fs');

module.exports.fetchData = async function() {
    
    try {

        const newUrl = 'https://api.apify.com/v2/datasets/3S2T1ZBxB9zhRJTBB/items?format=json&fields=lastUpdatedAtApify,deceased&clean=1'
        const response = await axios.get(newUrl)
        return response.data;
    } catch (error) {
        return console.log(error)
    }

    //const req = unirest("GET", "https://covid-19-data.p.rapidapi.com/report/country/name");
    /*const data = await unirest
                            .get('https://covid-19-data.p.rapidapi.com/report/country/name')
                            .query({"format": "json",
                                    "date": "2020-04-01",
                                    "name": "Brazil"})
                            .headers({  "x-rapidapi-key": "181eb5cc20mshebb68f57c4a4931p19000cjsned7c45e6fe1f",
                                    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                                    "useQueryString": true})
        

    return data.body;*/
    
}

module.exports.fetchParse = async function() {

    try {
        
    } catch (error) {
        
    }

}


