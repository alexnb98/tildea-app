import React from "react";
import PropTypes from "prop-types";
import {Box} from "@material-ui/core";

const Letter = props => {
    return (
        <Box
            p={2}
            borderRadius={8}
            mx={2}
            boxShadow={2}
            style={{cursor: "pointer"}}
            // id="letter"
            onClick={props.onClick}
        >
            {props.children}
        </Box>
    );
};

Letter.propTypes = {
    accent: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func
};

export default Letter;
