import React, {Component} from "react";
import data from "../assets/data/tildea-diacritica-1";
import {Container, Box, Grid, Typography} from "@material-ui/core";
import {green, red} from "@material-ui/core/colors";
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
        if (data.length && data[current].options.length <= 2) {
            options = (
                <Grid container justify="center" direction={Math.random() >= 0.5 ? "row" : "row-reverse"}>
                    <Box key="correct" onClick={this.correct} p={3} m={2} borderRadius={5} boxShadow={2}>
                        <Typography variant={"h4"}>{data[current].options[0]}</Typography>
                    </Box>
                    <Box key="incorrect" onClick={this.incorrect} p={3} m={2} borderRadius={5} boxShadow={2}>
                        <Typography variant={"h4"}>{data[current].options[1]}</Typography>
                    </Box>
                </Grid>
            );
        } else {
            options = <Box>Use Fishermann Shuffle</Box>;
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
                        {options}
                    </Box>
                </Grid>
            </Container>
        );
    }
}
