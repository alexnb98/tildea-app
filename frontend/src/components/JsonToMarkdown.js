import React from "react";
import {Typography, Box} from "@material-ui/core";

export default function JsonToMarkdown({content}) {
    const render = content.map((item, index) => {
        const key = Object.keys(item)[0];
        return (
            <Typography key={index} variant={key}>
                {item[key]}
            </Typography>
        );
    });
    return <Box my={10}>{render}</Box>;
}
