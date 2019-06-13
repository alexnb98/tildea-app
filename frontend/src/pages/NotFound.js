import React from "react";
import {Box, Grid, Typography, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <Grid container justify="center" alignContent="center" style={{minHeight: "80vh"}}>
            <Box align="center">
                <Typography variant="h1" align="center" gutterBottom>
                    Página no encontrada
                </Typography>
                <Button variant="contained" size="large" color="primary" component={Link} to="/ejercicios">
                    Todos los ejercicios
                </Button>
            </Box>
        </Grid>
    );
}
