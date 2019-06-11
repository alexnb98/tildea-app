import React from "react";
import {Container, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function TildeDiacritica() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    Tilde diacrítica
                </Typography>
                <Typography variant="body1">
                    Se coloca sobre todo en palabras monosílabas que tienen un par, con significado diferente.
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: El carro es de él. Te prepare un té.
                </Typography>
                <Typography variant="body1">La tilde diacríta no sigue las reglas generales de acentuación.</Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/tilde-diacritica/1">
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
