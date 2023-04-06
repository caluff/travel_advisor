import {makeStyles} from "tss-react/mui";
import {alpha} from "@mui/material"
import {styled} from "@mui/material/styles";

const useStyles = makeStyles()((theme) => {
    return {
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },

        toolbar: {
            display: 'flex', justifyContent: 'space-between',
        },

    }
});

export default useStyles;