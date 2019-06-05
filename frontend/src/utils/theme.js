import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {green, red} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/styles";

let theme = createMuiTheme();

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
