import {AppBar, Toolbar, Typography, Box, Autocomplete, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles.js'
import {styled, alpha} from '@mui/material/styles';
import React, {useState} from "react";

const Header = ({setCoordinates}) => {
    const {classes} = useStyles();
    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const [autocomplete, setAutocomplete] = useState(null)
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng});
    }
    return (
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant={"h5"} className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display={"flex"}>
                    <Typography variant={"h6"} className={classes.title}>
                        Explore new places
                    </Typography>
                    {/*<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>*/}
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    {/*</Autocomplete>*/}

                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header