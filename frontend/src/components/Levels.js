import React from "react";
import { Paper, Box, Typography, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

export default function Levels({ title, levels, link, history }) {
    return (
        <Paper>
            <Box m={2} p={2}>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Grid container>
                    {levels &&
                        levels.map((level, index) => {
                            return (
                                <Link key={index} to={`/${link}/${level}`}>
                                    <Box
                                        mr={3}
                                        bgcolor={grey[200]}
                                        py={2}
                                        px={3}
                                        borderRadius={8}
                                    >
                                        <Typography variant="h5">
                                            {level}
                                        </Typography>
                                    </Box>
                                </Link>
                            );
                        })}
                </Grid>
            </Box>
        </Paper>
    );
}
