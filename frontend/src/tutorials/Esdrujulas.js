import React from "react";
import {Container, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Esdrujulas() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    Esdrújulas
                </Typography>
                <Typography variant="body1">
                    Las palabras esdrújulas son aquellas que tienen la sílaba tónica en la antepenúltima sílaba y
                    siempre llevan tilde.
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: rápido, análisis, espátula, éxtasis.
                </Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/esdrujulas/1">
                    Ejercicio 1
                </Button>
                <Button
                    style={styles.indentOne}
                    color="secondary"
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/dashboard"
                >
                    Dashboard
                </Button>
            </Box>
        </Container>
    );
}
