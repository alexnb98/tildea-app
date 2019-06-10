import React from "react";
import {Grid, Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const GameFeedback = function({correct, incorrect, total, next, repeat, history}) {
    const style = {margin: "1rem"};
    const percentCorrect = correct > 0 ? `${((correct / total) * 100).toFixed()}%` : "";
    const percentIncorrect = incorrect > 0 ? `${((incorrect / total) * 100).toFixed()}%` : "";
    return (
        <Box my={10}>
            <Typography align="center" variant="h2">
                Felicitaciones, completaste el nivel!
            </Typography>
            <Box my={10}>
                <Grid container justify="center">
                    <Grid item xs={12} md={6}>
                        <Box my={2} p={2} boxShadow={2} borderRadius={8}>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography variant="h6">Correctas: {correct}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">{percentCorrect}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box my={2} p={2} boxShadow={2} borderRadius={8}>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography variant="h6">Incorrectas: {incorrect}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">{percentIncorrect}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justify="center">
                <Button onClick={repeat} style={style} size="large" variant="contained" color="secondary">
                    Repetir
                </Button>
                <Button
                    component={Link}
                    to={"/dashboard"}
                    style={style}
                    size="large"
                    variant="contained"
                    color="secondary"
                >
                    Dashboard
                </Button>
                <Button onClick={next} style={style} size="large" variant="contained" color="primary">
                    Continuar
                </Button>
            </Grid>
        </Box>
    );
};

export default GameFeedback;
