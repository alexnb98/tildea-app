import React from "react";
import {Grid, Box, Typography} from "@material-ui/core";
import Paper from "./Paper";
import utils from "../utils/utils";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AccentLetter({word, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container justify="center" alignItems="center" style={{minHeight: "50vh"}}>
            {word ? (
                word.split("").map((letter, i) => {
                    if (i === utils.getAccentIndex(word)) {
                        return (
                            <Box key={i} onClick={correct} p={2} fontSize={30} mx={1} boxShadow={2} borderRadius={8}>
                                {letter}
                            </Box>
                        );
                    }
                    return (
                        <Box
                            ref={e => (e ? e.classList.remove(utils.incorrect) : null)}
                            key={i}
                            onClick={e => e.currentTarget.classList.add(utils.incorrect)}
                            p={2}
                            fontSize={30}
                            mx={1}
                            boxShadow={2}
                            borderRadius={8}
                        >
                            {letter}
                        </Box>
                    );
                })
            ) : (
                <Box p={3} mx={2} borderRadius={5} boxShadow={2}>
                    <Typography variant="h4">No more words</Typography>
                </Box>
            )}
        </Grid>
    );
}
