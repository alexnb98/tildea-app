import React from "react";
import {Container, Box, Typography} from "@material-ui/core";
import TutorialButtons from "../components/TutorialButtons";

export default function Agudas() {
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
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: canción, correré, razón, compás, caminó
                </Typography>
                <TutorialButtons topic="agudas" />
            </Box>
        </Container>
    );
}
