import React from "react";
import {Container, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function SilabaTonica() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    Agudas
                </Typography>
                <Typography variant="body1">
                    Las agudas son aquellas palabras que tienen la sílaba tónica en la ultima sílaba.
                </Typography>
                <Typography variant="body1">
                    Estas llevan tilde si terminan en vocal o consonantes "n" o "s" y no son precedidas por una
                    consonante, como sucede con la palabra "robots".
                </Typography>
                <Typography variant="body1">Asi es como la identificas:</Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: canción, correré, razón, compás, caminó
                </Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/agudas/1">
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
