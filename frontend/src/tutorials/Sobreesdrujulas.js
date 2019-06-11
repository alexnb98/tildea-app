import React from "react";
import {Container, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Sobreesdrujulas() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    Sobreesdrújulas
                </Typography>
                <Typography variant="body1">
                    Las palabras sobreesdrújulas son aquellas que tienen la sílaba tónica antes del antepenúltimo lugar
                    y siempre llevan tilde.
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: cómpramelo, recomiéndasela, imagínesemelas, ordénaselo.
                </Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/sobreesdrujulas/1">
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
