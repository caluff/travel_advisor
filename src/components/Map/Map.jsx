import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from "@mui/material";
import {LocationOnOutlined} from "@mui/icons-material";
import {Rating} from "@mui/material";

import useStyles from "./styles.js";

const Map = ({setCoordinates,setBounds,coordinates, places}) => {
    const {classes} = useStyles();
    const isDeskyop = useMediaQuery('(min-width:600px)')
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
                // onChildClick={''}
            >
                {places?.map((place,i)=>(
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDeskyop ? (
                                <LocationOnOutlined color={"primary"} fontSize={"large"}/>
                            ):(
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant={"subtitle2"} gutterBottom></Typography>
                                    {place.name}
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : ''}
                                        alt={place.name}
                                    />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}
export default Map