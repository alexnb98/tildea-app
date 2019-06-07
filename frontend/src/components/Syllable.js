import React from "react";
import {Grid, Box, Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "./Paper";

export default function Syllable({options, correctIndex, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container justify="center" alignItems="center" style={{minHeight: "50vh"}}>
            {options ? (
                options.map((syllable, i) => (
                    <Paper
                        key={i}
                        text={syllable}
                        click={correctIndex === i ? correct : incorrect}
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
