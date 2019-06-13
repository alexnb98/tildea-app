import React from "react";
import {Container, Box, Typography} from "@material-ui/core";
import TutorialButtons from "../components/TutorialButtons";

export default function Graves() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    Graves
                </Typography>
                <Typography variant="body1">
                    Las palabras graves, son aquellas que llevan el mayor golpe de voz en la penúltima sílaba. Llevan
                    tilde cuando no terminan en “n”, “s” o vocal.
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    Ejemplo: trébol, Bolívar, dólar, césped, referéndum.
                </Typography>
                <TutorialButtons topic="graves" />
            </Box>
        </Container>
    );
}
