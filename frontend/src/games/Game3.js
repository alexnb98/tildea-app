import React from "react";
import {Box, Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {utils} from "../utils/utils";
import Letter from "../components/Letter";

export default function AccentLetter({word, correct, incorrect}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <React.Fragment>
            {word ? (
                word.split("").map((letter, i) => {
                    if (i === utils.getAccentIndex(word)) {
                        return (
                            <Letter key={i} isMobile={isMobile} click={correct} letter={utils.toggleAccent(letter)} />
                        );
                    }
                    return <Letter key={i} isMobile={isMobile} click={incorrect} letter={letter} />;
                })
            ) : (
                <Box p={3} mx={2} borderRadius={5} boxShadow={2}>
                    <Typography variant="h4">No more words</Typography>
                </Box>
            )}
        </React.Fragment>
    );
}
