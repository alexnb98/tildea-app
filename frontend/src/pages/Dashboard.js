import React from "react";
import {Typography, Container, Box} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import Levels from "../components/Levels";

const levels = [
    {
        title: "Silaba Tonica",
        link: "silaba-tonica",
        levels: ["start", 1, 2, 3]
    },
    {title: "Agudas", link: "agudas", levels: ["start", 1, 2, 3, 4, 5]},
    {
        title: "Llanas o Graves",
        link: "llanas",
        levels: ["start", 1, 2]
    },
    {title: "Esdrujulas", link: "esdrujulas", levels: ["start", 1, 2, 3]},
    {
        title: "Sobreesdrujulas",
        link: "sobreesdrujulas",
        levels: ["start", 1]
    },
    {title: "Acentos", link: "acento", levels: [1]}
];

const Landing = props => (
    <div>
        <Box py={8} bgcolor={grey[200]}>
            <Typography variant="h1" align="center">
                Dashboard
            </Typography>
        </Box>
        <Container maxWidth="md">
            {levels.map((level, index) => {
                return <Levels key={index} title={level.title} link={level.link} levels={level.levels} />;
            })}
        </Container>
    </div>
);

export default Landing;
