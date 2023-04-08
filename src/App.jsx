import {CssBaseline, Grid} from "@mui/material";


import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import {getPlaceData} from "./api/index.js";
import {useEffect, useState} from "react";

const App = () =>{
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude})
        })
    },[])

    useEffect(()=>{
        getPlaceData(bounds.sw,bounds.ne)//////////////////////////////////////////
            .then((data)=>{
                console.log(data);
                setPlaces(data);
            })
    },[coordinates,bounds])

    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={6} md={4}>
                    <List
                        places={places}
                    />
                </Grid>
                <Grid item xs={6} md={8}>
                    <Map
                        setCoordinates = {setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
