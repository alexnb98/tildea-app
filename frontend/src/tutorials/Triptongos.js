import React from "react";
import {Container, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Triptongos() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    El Triptongo
                </Typography>
                <Typography variant="body1">
                    El triptongo se forma cuando tres vocales se juntan en la misma sílaba. Es una secuencia de las
                    siguientes vocales:
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: miau, copiáis
                </Typography>
                <Typography variant="body1">
                    Lleva tilde segun las reglas generales. Si el acento recae sobre la silaba con un tripongo, la vocal
                    acentuada siempre es la vocal abierta.
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: Anunciáis, Cambiáis, Haliéutica
                </Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/triptongos/1">
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
