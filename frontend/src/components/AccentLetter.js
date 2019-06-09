import React from "react";
import {Grid, Box, Typography} from "@material-ui/core";
import Paper from "./Paper";
import utils from "../utils/utils";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Letter from "./Letter";

export default function AccentLetter({word, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container justify="center" alignItems="center" style={{minHeight: "50vh"}}>
            {word ? (
                word.split("").map((letter, i) => {
                    if (i === utils.getAccentIndex(word)) {
                        return <Letter key={i} click={correct} letter={utils.toggleAccent(letter)} />;
                    }
                    return <Letter key={i} click={incorrect} letter={letter} />;
                })
            ) : (
                <Box p={3} mx={2} borderRadius={5} boxShadow={2}>
                    <Typography variant="h4">No more words</Typography>
                </Box>
            )}
        </Grid>
    );
}
