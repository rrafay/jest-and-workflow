const axios = require('axios').default;

class Formulas{
    constructor(){

    }
    translate(string) {
        return string.split("").reverse().join("");
    }
    
    
    
    
    bodyMassIndex(weight, height) {
        height = height * height
        return weight / height
    }
    
    poundsToKg(pounds){
        return pounds / 2.205
    
    }
}


class myCall{
    constructor(){
        
    }
   async myfunc() {
        const response = await axios.get("https://api.unsplash.com/search/photos",
        {
            params : {
                client_id: process.env.APP_SECRET_KEY
            }
        
        }
        
        )
        return response.data.results;
        }

}




module.exports = {
    Formulas,
    myCall
    

}




