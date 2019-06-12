import React from "react";
import {Box, Button, Typography} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const Landing = props => (
    <React.Fragment>
        <Box py={15} bgcolor={grey[200]}>
            <Typography variant="h1" align="center" gutterBottom>
                Tildea
            </Typography>
            <Typography variant="subtitle1" align="center">
                Aprende las reglas de acentuación jugando!
            </Typography>
        </Box>
        <Box my={10} align="center">
            <Button variant="contained" color="primary" onClick={() => props.history.push("/ejercicios")}>
                Todos los ejercicios
            </Button>
        </Box>
    </React.Fragment>
);

export default Landing;
