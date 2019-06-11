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
                    Llanas o Graves
                </Typography>
                <Typography variant="body1">
                    Las palabras llanas, son aquellas que llevan el mayor golpe de voz en la penúltima sílaba. Llevan
                    tilde cuando no terminan en “n”, “s” o vocal.
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: trébol, Bolívar, dólar, césped, referéndum.
                </Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/graves/1">
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
