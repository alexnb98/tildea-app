import React, {memo} from "react";
import {Grid, Box, Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "./Paper";
import utils from "../utils/utils";

const SingleChoice = function({sentence, options, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const optionItems = options.map((item, index) => {
        if (index === 0) return <Paper click={correct} key={index} text={item} isMobile={isMobile} />;
        return <Paper click={incorrect} key={index} text={item} isMobile={isMobile} />;
    });
    const shuffledOptions = utils.fisherYatesShuffle(optionItems);
    return (
        <Grid container justify="center" alignItems="center" style={{minHeight: "50vh"}}>
            <Box>
                {sentence ? (
                    <Box boxShadow={2} my={3} p={2} borderRadius={8}>
                        <Typography variant="h2" align="center">
                            {sentence}
                        </Typography>
                    </Box>
                ) : (
                    <Box boxShadow={2} my={3} p={2} borderRadius={8}>
                        <Typography variant="h2" align="center">
                            Escoje la escritura correcta
                        </Typography>
                    </Box>
                )}
                <Grid container justify="center">
                    {shuffledOptions}
                </Grid>
            </Box>
        </Grid>
    );
};

export default memo(SingleChoice);
