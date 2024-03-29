import React from "react";
import {Container, Box, Typography} from "@material-ui/core";
import TutorialButtons from "../components/TutorialButtons";

export default function Hiatos() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    El Hiato
                </Typography>
                <Typography variant="body1">
                    Se forma cuando dos vocales seguidas estan en dos sílabas diferentes.
                </Typography>
                <Typography variant="body1">
                    Los hiatos se acentuan usando las reglas generales de acentuacion. Excepto cuando hay una
                    combinación de una vocal cerrada tónica, seguida de una vocal abierta átona, en ese caso se acentuan
                    siempre.
                </Typography>
                <Typography variant="body1">Ejemplos:</Typography>

                <Typography style={styles.indentOne} variant="body1">
                    Reglas generales de acentuación:
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    esdrújula: créeme → cré- e- me
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    aguda: rehén → re - hén
                </Typography>

                <Typography style={styles.indentOne} variant="body1">
                    Excepciones:
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    grave: búho → bú - ho
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    grave: geografía → geo-gra-fí-a
                </Typography>
                <TutorialButtons topic="hiatos" />
            </Box>
        </Container>
    );
}
