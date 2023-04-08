import axios from "axios";


//https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary
//https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary
export const getPlaceData = async (type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'abe4b345c0msh444aac2b4217bbbp1f6e4cjsn195fc49f1b11',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}