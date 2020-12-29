const currentData = require('../services/covidData');
const moment = require('moment');
const { last } = require('underscore');

exports.homeController = async function(req, res, next){
    
    
    try {


        // Calling service's layer
        const data = await currentData.fetchData()
        let iterator = data.values()
        let dataMap = new Map()
        let lastDecease,  newDeceases = 0
        let nextDate


        iterator.next()

        //transversing the fetched data
        data.forEach((element) => {

            nextDate = iterator.next().value
            newDeceases = element.deceased - lastDecease

            
            
            if( typeof nextDate !== 'undefined'){
                nextDate = moment(nextDate.lastUpdatedAtApify).format('MMM Do')
                //console.log('This Date: ',moment(element.lastUpdatedAtApify).format('MMM Do'), 'Next Date: ', nextDate)
            
                if(nextDate !== moment(element.lastUpdatedAtApify).format('MMM Do')) {
                    lastDecease = element.deceased
                }
                dataMap.set(moment(element.lastUpdatedAtApify).format('MMM Do'),newDeceases)
                //console.log('LastDeceased: ', lastDecease)
            }
        
        
            
             
        });
        
    
        
        res.render("index", {
            deceased: Array.from(dataMap.values()),
            date: Array.from(dataMap.keys())
        });
        
    }catch (error) {
        throw error
    }
}