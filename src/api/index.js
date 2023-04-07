import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            params: {
                bl_latitude: '11.847676',////sw.lat
                tr_latitude: '12.838442',/////ne.lat
                bl_longitude: '109.095887',/////sw.lng
                tr_longitude: '109.149359',////ne.lng
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