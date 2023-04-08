import {CssBaseline, Grid} from "@mui/material";


import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import {getPlaceData} from "./api/index.js";
import {useEffect, useState} from "react";

const App = () =>{
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null)

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [isLoading,setIsLoading] = useState(false)
    const [type, setType] = useState('hotels');
    const [rating, setRating] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude})
        })
    },[])

    useEffect(()=>{
        const filteredPlaces = places.filter((place)=>place.rating>rating)
    },[rating])

    useEffect(()=>{
        setIsLoading(true);
        getPlaceData(type, bounds.sw,bounds.ne)
            .then((data)=>{
                console.log(data);
                setPlaces(data);
                setIsLoading(false)
            })
    },[type, coordinates,bounds])

    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={6} md={4}>
                    <List
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={6} md={8}>
                    <Map
                        setCoordinates = {setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
