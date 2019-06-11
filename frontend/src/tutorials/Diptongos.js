import React from "react";
import {Container, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Diptongos() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    El Diptongo
                </Typography>
                <Typography variant="body1">
                    El diptongo se forma cuando dos vocales aparecen juntas en la misma silaba.{" "}
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: abuelo → a-bue-lo, aplauso → a-plau-so, ciudad → ciu-dad
                </Typography>
                <Typography variant="body1">
                    Cuando esta formado por una vocal abierta tónica y una vocal cerrada átona, la tilde se coloca en la
                    vocal abierta.
                </Typography>
                <Typography variant="body1">
                    Si el diptongo esta formado por dos vocales cerradas, la tilde se coloca en la segunda vocal.
                </Typography>
                <Button color="primary" variant="contained" size="large" component={Link} to="/diptongos/1">
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
