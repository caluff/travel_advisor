import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@mui/material";

import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx";
import useStyles from "./styles.js";
import {useState, useEffect, createRef} from "react";

const List = ({places, childClicked, isLoading, type, setType, setRating, rating}) => {
    const {classes} = useStyles();


    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs)
    }, [places]);
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size={"5"}/>
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            label={"Type"}
                        >
                            <MenuItem value={"restaurants"}>Restaurants</MenuItem>
                            <MenuItem value={"hotels"}>Hotels</MenuItem>
                            <MenuItem value={"attractions"}>Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            label={"Rating"}
                        >
                            <MenuItem value={"0"}>All</MenuItem>
                            <MenuItem value={"3"}>Above 3.0</MenuItem>
                            <MenuItem value={"4"}>Above 4.0</MenuItem>
                            <MenuItem value={"4.5"}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid item key={i} xs={12}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elRefs[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}
export default List