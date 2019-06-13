import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {green, red} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/styles";

let theme = createMuiTheme({
    typography: {
        body1: {
            fontSize: "1.3rem",
            marginBottom: "1rem"
        }
    }
});

theme = responsiveFontSizes(theme);

export {theme};

export const globalStyles = makeStyles({
    "@global": {
        ".correct": {
            background: green[600],
            color: "#fff"
        },
        ".incorrect": {
            background: red[600],
            color: "#fff"
        }
    }
});
