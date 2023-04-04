import {CssBaseline, Grid} from "@mui/material";

import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails.jsx";

function App() {

    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Map/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
