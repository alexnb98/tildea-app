import React from "react";
import {Container, Box, Typography} from "@material-ui/core";
import TutorialButtons from "../components/TutorialButtons";

export default function SilabaTonica() {
    const styles = {
        indentOne: {marginLeft: "2rem"},
        indentTwo: {marginLeft: "4rem"}
    };
    return (
        <Container maxWidth="md">
            <Box my={10}>
                <Typography align="center" variant="h1" gutterBottom>
                    Silaba tónica
                </Typography>
                <Typography variant="body1">
                    La silaba tónica es la parte de la palabra que se pronuncia con mayor fuerza de voz. Todas las
                    palabras contienen una silaba tónica, con excepción a algunas monosílabas.
                </Typography>
                <Typography variant="body1">
                    Identificar la silaba tónica es importante para poder acentuar las palabras correctamente.
                </Typography>
                <Typography variant="body1">Asi es como la identificas:</Typography>
                <Typography style={styles.indentOne} variant="body1">
                    1. Escoje una palabra y dividela en silabas: Pre-gun-ta
                </Typography>
                <Typography style={styles.indentOne} variant="body1">
                    2. Ahora pronuncia la palabra cambiando la silaba tonica
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    Si dicemos PRE-gun-ta, nos damos cuenta que no es correcto.
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    Si decimos pre-gun-TA, vemos que tampoco es correcto
                </Typography>
                <Typography style={styles.indentTwo} variant="body1">
                    Finalmente si pronunciamos pre-GUN-ta, escuchamos que si suena correctamente.
                </Typography>
                <Typography variant="body1">
                    De esta manera podemos saber cual es la silaba tónica con cualquier palabra.
                </Typography>
                <TutorialButtons topic="silaba-tonica" />
            </Box>
        </Container>
    );
}
