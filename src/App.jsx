import {CssBaseline, Grid} from "@mui/material";


import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails.jsx";
import {getPlaceData} from "./api/index.js";
import {useEffect, useState} from "react";

const App = () =>{
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({lat:0,lng:0});
    const [bounds, setBounds] = useState(null);
    useEffect(()=>{
        getPlaceData()
            .then((data)=>{
                console.log(data);
                setPlaces(data);
            })
    },[])

    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={6} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Map
                        setCoordinates = {setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
