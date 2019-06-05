import React, {Component} from "react";
import {Container, Grid, Typography, Box} from "@material-ui/core";
import data from "../assets/data/silaba-tonica-data";
import Stats from "../components/Stats";
import Syllable from "../components/Syllable";
import utils from "../utils/utils";

export default class SilabaTonica extends Component {
    state = {
        words: [],
        current: 0,
        stats: {
            correct: 0,
            incorrect: 0
        },
        disable: false
    };

    componentDidMount() {
        this.setState({words: data});
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
            const current = e.currentTarget;
            current.classList.add(utils.correct);
            setTimeout(() => {
                current.classList.remove(utils.correct);
                this.nextTask();
            }, 1000);
        }
    };

    incorrect = e => {
        if (!this.state.disable) {
            this.setState(state => {
                return {stats: {...state.stats, incorrect: state.stats.incorrect + 1}, disable: true};
            });
            const current = e.currentTarget;
            current.classList.add(utils.incorrect);
            setTimeout(() => {
                current.classList.remove(utils.incorrect);
                this.nextTask();
            }, 1000);
        }
    };

    render() {
        const {current, words, stats} = this.state;
        return (
            <Container maxWidth="md">
                <Grid container style={{minHeight: "50vh"}} justify="center" alignItems="center">
                    <Box>
                        <Typography variant="h2" align="center" gutterBottom>
                            Selecciona la sílaba tonica
                        </Typography>
                        <Syllable words={words} current={current} correct={this.correct} incorrect={this.incorrect} />
                    </Box>
                </Grid>
                <Stats correct={stats.correct} incorrect={stats.incorrect} missing={words.length - current} />
            </Container>
        );
    }
}
