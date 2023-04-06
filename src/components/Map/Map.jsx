import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from "@mui/material";
import {LocationOnOutlined} from "@mui/icons-material";
import {Rating} from "@mui/material";

import useStyles from "./styles.js";

const Map = () => {
    const {classes} = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = {lat: 0, lng: 0}
    return (
        <div className={classes.mapContainer}>
            {/*<GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyA-JEstw6gAaaBjychTDTqzkqka_b6-1DM'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>*/}
            ddddddd
        </div>
    )
}
export default Map