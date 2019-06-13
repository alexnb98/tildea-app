import React from "react";
import {Box, Typography, Grid} from "@material-ui/core";

export default function Stats({correct, incorrect, missing}) {
    return (
        <Box my={3} boxShadow={2} py={2} borderRadius={8}>
            <Grid container justify="space-around">
                <Box mx={3}>
                    <Typography align="center" variant="h6">
                        Correctas
                    </Typography>
                    <Typography align="center" variant="h4">
                        {correct}
                    </Typography>
                </Box>
                <Box mx={3}>
                    <Typography align="center" variant="h6">
                        Incorrectas
                    </Typography>
                    <Typography align="center" variant="h4">
                        {incorrect}
                    </Typography>
                </Box>
                <Box mx={3}>
                    <Typography align="center" variant="h6">
                        Restantes
                    </Typography>
                    <Typography align="center" variant="h4">
                        {missing}
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
}
