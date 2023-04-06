import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from "@mui/material";
import {LocationOnOutlined} from "@mui/icons-material";
import {Rating} from "@mui/material";

import useStyles from "./styles.js";

const Map = ({setCoordinates,setBounds,coordinates}) => {
    const {classes} = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:"AIzaSyA-JEstw6gAaaBjychTDTqzkqka_b6-1DM"}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}
export default Map