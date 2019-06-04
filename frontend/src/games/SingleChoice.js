import React, {Component} from "react";
import data from "../assets/data/tildea-diacritica-1";
import {Container, Box, Grid, Typography} from "@material-ui/core";
import {green, red} from "@material-ui/core/colors";
import utils from "../utils/utils";
// import Paper from "../components/Paper";

export default class SigleChoice extends Component {
    state = {
        data: [],
        current: 0,
        stats: {
            correct: 0,
            incorrect: 0
        },
        disable: false
    };

    componentDidMount() {
        this.setState({data});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.data.length === 0 || this.state.current !== nextState.current) return true;
        return false;
    }

    nextTask = () => {
        this.setState(state => {
            return {current: state.current + 1, disable: false};
        });
    };

    correct = e => {
        if (!this.state.disable) {
            this.setState(state => {
                return {stats: {...state.stats, correct: state.stats.correct + 1}, disable: true};
            });
            e.currentTarget.style.backgroundColor = green[600];
            e.currentTarget.firstChild.style.color = "#fff";
            const current = e.currentTarget;
            setTimeout(() => {
                current.style.backgroundColor = "#fff";
                current.firstChild.style.color = "#212529";
                this.nextTask();
            }, 1000);
        }
    };

    incorrect = e => {
        if (!this.state.disable) {
            this.setState(state => {
                return {stats: {...state.stats, incorrect: state.stats.incorrect + 1}, disable: true};
            });
            e.currentTarget.style.backgroundColor = red[600];
            e.currentTarget.firstChild.style.color = "#fff";
            const current = e.currentTarget;
            setTimeout(() => {
                current.style.backgroundColor = "#fff";
                current.firstChild.style.color = "#212529";
                this.nextTask();
            }, 1000);
        }
    };

    render() {
        const {data, current} = this.state;
        let options = <Box>Something went wrong</Box>;
        let shuffledOptions = <Box>Not shuffled</Box>;
        if (data.length) {
            options = data[current].options.map((item, index) => {
                if (index === 0)
                    return (
                        <Box
                            mx={4}
                            key={item + index}
                            onClick={this.correct}
                            p={3}
                            m={2}
                            borderRadius={5}
                            boxShadow={2}
                        >
                            <Typography variant={"h4"}>{item}</Typography>
                        </Box>
                    );
                return (
                    <Box mx={4} key={item + index} onClick={this.incorrect} p={3} m={2} borderRadius={5} boxShadow={2}>
                        <Typography variant={"h4"}>{item}</Typography>
                    </Box>
                );
            });

            shuffledOptions = utils.fisherYatesShuffle(options);
        }
        return (
            <Container maxWidth="md">
                <Grid container justify="center" alignItems="center" style={{minHeight: "50vh"}}>
                    <Box>
                        <Box>
                            {data.length && data[current].sentence ? (
                                <Box boxShadow={2} my={3} p={2} borderRadius={8}>
                                    <Typography variant="h2">{data[current].sentence}</Typography>
                                </Box>
                            ) : (
                                <Box boxShadow={2} my={3} p={2} borderRadius={8}>
                                    <Typography variant="h2">Escoje la escritura correcta</Typography>
                                </Box>
                            )}
                        </Box>
                        <Grid justify="center" container>
                            {shuffledOptions}
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        );
    }
}
