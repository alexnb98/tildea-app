import React from "react";
import {Box, Typography} from "@material-ui/core";

const Letter = ({letter, click, isMobile}) => {
    return (
        <Box onClick={click} p={isMobile ? "10px" : 2} m={isMobile ? "5px" : 1} boxShadow={2} borderRadius={8}>
            <Typography variant={isMobile ? "h5" : "h4"}>{letter}</Typography>
        </Box>
    );
};

export default Letter;
