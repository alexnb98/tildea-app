import React, {Component} from "react";
import data from "../assets/data/agudas-1";
import {Container, Box, Typography} from "@material-ui/core";
import utils from "../utils/utils";
import Stats from "../components/Stats";
import SingleChoice from "../components/SingleChoice";

// TODO:
// // * create global theme
// // * work with classes instead of e.target.style
// // * Refactor paper
// * include an end
// * render stats
// * works with more than 3 words

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
        const {data, stats, current} = this.state;

        return (
            <Container maxWidth="md">
                {data.length && current < data.length ? (
                    <SingleChoice
                        sentence={data[current].sentence}
                        options={data[current].options}
                        correct={this.correct}
                        incorrect={this.incorrect}
                    />
                ) : (
                    <Box my={5}>
                        <Typography variant="h2" align="center">
                            Felicitaciones, completaste el nivel!
                        </Typography>
                    </Box>
                )}
                <Stats correct={stats.correct} incorrect={stats.incorrect} missing={data.length - current} />
            </Container>
        );
    }
}
