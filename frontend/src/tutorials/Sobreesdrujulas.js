import React from "react";
import {Container, Box, Typography} from "@material-ui/core";
import TutorialButtons from "../components/TutorialButtons";

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
                <TutorialButtons topic="sobreesdrujulas" />
            </Box>
        </Container>
    );
}
