import {AppBar, Toolbar, Typography, Box, Autocomplete, InputBase} from "@mui/material";
import {Search} from "@mui/icons-material";
import useStyles from './styles.js'
const Header = () => {
    const {classes} = useStyles();
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
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search/>
                            </div>
                            <InputBase placeholder={"Search..."} classes={{root:classes.inputRoot, input:classes.inputInput}}/>
                        </div>
                    {/*</Autocomplete>*/}
                </Box>

            </Toolbar>
        </AppBar>
    )
}
export default Header