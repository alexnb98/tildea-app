import React from "react";
import {Link} from "react-router-dom";
import {Button, Box} from "@material-ui/core";

export default function TutorialButtons({topic}) {
    return (
        <React.Fragment>
            <Box m={1}>
                <Button color="primary" variant="contained" size="large" component={Link} to={`/${topic}/1`}>
                    Ejercicio 1
                </Button>
            </Box>
            <Box m={1}>
                <Button color="secondary" variant="contained" size="large" component={Link} to="/ejercicios">
                    Todos los ejercicios
                </Button>
            </Box>
        </React.Fragment>
    );
}
