import React from "react";
import {Box} from "@material-ui/core";

const Letter = ({letter, click, isMobile}) => {
    return (
        <Box onClick={click} p={2} fontSize={30} mx={1} boxShadow={2} borderRadius={8}>
            {letter}
        </Box>
    );
};

export default Letter;
