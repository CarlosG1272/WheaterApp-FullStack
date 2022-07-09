const axios = require("axios"); 
function getCorrectImage(information, allImages) {
    let coincidence = allImages.find(el=> el.title === information.weather[0].description); 
    
    if(coincidence) {
        return coincidence.imgUrl
    }
    return `http://openweathermap.org/img/wn/${information.weather[0].icon}@2x.png`
}


const KEY = process.env.API_KEY || "4ae2636d8dfbdc3044bede63951a019b"

const getDefaultOptions = async (req,res) => {
    const defaultsCountries = ["Washington", "Beijing", "Moscow", "Berlin", "London", "Tokyo", "Paris", "Seoul", "Riyadh", "Abu Dhabi"]
    // Get images 
    const response = await axios.get("https://image-api-guerra.herokuapp.com/whaterApp/ApiImages"); 
    let images = response.data; 
    let prevdata = []

    const promises = defaultsCountries.map(el=> 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${KEY}&units=imperial`).then(res=> prevdata.push(res.data)).catch(err=> console.error(err))
        )

    Promise.all(promises)
    .then(result=> {
    })
    .then(response =>  {
        const data = prevdata.map(el=> ({...el, image: getCorrectImage(el, images)}))
        res.send(data)
    })
    .catch(err=> res.send(err))

}

const getOneDetail = async (req,res) => {
    const {name} = req.params; 
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}&units=imperial`); 

        const images = await axios.get("https://image-api-guerra.herokuapp.com/whaterApp/ApiImages")

        let returnInformation = { 
            ...response.data, image: getCorrectImage(response.data, images.data)
        }

        if (response.cod === "404") return res.send([]); 
        return res.send(JSON.stringify(returnInformation))
    } catch(e){
        res.status(404).send(e)
    }

}
module.exports = {getDefaultOptions, getOneDetail}