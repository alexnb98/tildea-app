import React from "react";
import {Grid, Box, Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "./Paper";

export default function Syllable({words, current, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container justify="center">
            {words.length && current < words.length ? (
                words[current].word.map((silable, i) => (
                    <Paper
                        key={i}
                        text={silable}
                        condition={words[current].correct === i}
                        correct={correct}
                        incorrect={incorrect}
                        isMobile={isMobile}
                    />
                ))
            ) : (
                <Box p={3} mx={2} borderRadius={5} boxShadow={2}>
                    <Typography variant="h4">No more words</Typography>
                </Box>
            )}
        </Grid>
    );
}
