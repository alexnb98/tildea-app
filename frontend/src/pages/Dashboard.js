import React from "react";
import {Typography, Container, Box} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import Levels from "../components/Levels";
import dashboardLevels from "../utils/dashboardLevels";

const Landing = props => (
    <div>
        <Box py={8} bgcolor={grey[200]}>
            <Typography variant="h1" align="center">
                Dashboard
            </Typography>
        </Box>
        <Container maxWidth="md">
            {dashboardLevels.map((level, index) => {
                return <Levels key={index} title={level.title} link={level.link} levels={level.levels} />;
            })}
        </Container>
    </div>
);

export default Landing;
