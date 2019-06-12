import React, {memo} from "react";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "../components/Paper";
import {utils} from "../utils/utils";

const SingleChoice = function({options, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const optionItems = options.map((item, index) => {
        if (index === 0) return <Paper click={correct} key={index} text={item} isMobile={isMobile} />;
        return <Paper click={incorrect} key={index} text={item} isMobile={isMobile} />;
    });
    const shuffledOptions = utils.fisherYatesShuffle(optionItems);
    return <React.Fragment>{shuffledOptions}</React.Fragment>;
};

export default memo(SingleChoice);
