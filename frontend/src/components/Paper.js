import React from "react";
import {Box, Typography} from "@material-ui/core";

export default function Paper({isMobile, text, click}) {
    return (
        <Box onClick={click} p={isMobile ? 2 : 3} m={isMobile ? 1 : 2} borderRadius={5} boxShadow={2}>
            <Typography variant={isMobile ? "h5" : "h4"}>{text}</Typography>
        </Box>
    );
}
