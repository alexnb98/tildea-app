import React, {Component} from "react";
import {Container, Grid, Typography, Box} from "@material-ui/core";
import {green, red} from "@material-ui/core/colors";
import data from "../assets/data/silaba-tonica-data";
import Stats from "../components/Stats";

export default class SilabaTonica extends Component {
    state = {
        words: [],
        current: 0,
        stats: {
            correct: 0,
            incorrect: 0
        }
    };

    componentDidMount() {
        this.setState({words: data});
    }

    nextTask = () => {
        this.setState(state => {
            return {current: state.current + 1};
        });
    };

    correct = e => {
        this.setState(state => {
            return {stats: {...state.stats, correct: state.stats.correct + 1}};
        });
        e.currentTarget.style.backgroundColor = green[600];
        e.currentTarget.firstChild.style.color = "#fff";
        const current = e.currentTarget;
        setTimeout(() => {
            current.style.backgroundColor = "#fff";
            current.firstChild.style.color = "#212529";
            this.nextTask();
        }, 1000);
    };

    incorrect = e => {
        this.setState(state => {
            return {stats: {...state.stats, incorrect: state.stats.incorrect + 1}};
        });
        e.currentTarget.style.backgroundColor = red[600];
        e.currentTarget.firstChild.style.color = "#fff";
        const current = e.currentTarget;
        setTimeout(() => {
            current.style.backgroundColor = "#fff";
            current.firstChild.style.color = "#212529";
            this.nextTask();
        }, 1000);
    };

    render() {
        const {current, words, stats} = this.state;
        return (
            <Container maxWidth="md">
                <Grid container style={{minHeight: "60vh"}} justify="center" alignItems="center">
                    <Box>
                        <Typography variant="h2" gutterBottom>
                            Selecciona la sílaba tonica
                        </Typography>
                        <Grid container justify="center">
                            {words.length && current < words.length ? (
                                words[current].word.map((silable, i) => (
                                    <Box
                                        key={i}
                                        onClick={words[current].correct === i ? this.correct : this.incorrect}
                                        p={3}
                                        mx={2}
                                        borderRadius={5}
                                        boxShadow={2}
                                    >
                                        <Typography variant="h4">{silable}</Typography>
                                    </Box>
                                ))
                            ) : (
                                <Box p={3} mx={2} borderRadius={5} boxShadow={2}>
                                    <Typography variant="h4">Loading...</Typography>
                                </Box>
                            )}
                        </Grid>
                    </Box>
                </Grid>
                <Stats correct={stats.correct} incorrect={stats.incorrect} missing={words.length - current} />
            </Container>
        );
    }
}
