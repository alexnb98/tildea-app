import React, {Component} from "react";
import {Grid, Container, Box, Typography, CircularProgress} from "@material-ui/core";
import axios from "axios";

// components
import utils from "../utils/utils";
import Stats from "../components/Stats";
import SingleChoice from "../components/SingleChoice";
import Syllable from "../components/Syllable";
import JsonToMarkdown from "../components/JsonToMarkdown";

export default class SigleChoice extends Component {
    state = {
        game: null,
        exercises: [],
        current: 0,
        stats: {
            correct: 0,
            incorrect: 0
        },
        disable: false,
        loading: true,
        error: null
    };

    componentDidMount() {
        axios
            .get(`/api${this.props.match.url}`)
            .then(({data}) => {
                if (data.content) {
                    this.setState({
                        exercises: data.exercises,
                        game: data.game,
                        content: data.content,
                        loading: false
                    });
                } else {
                    this.setState({exercises: data.exercises, game: data.game, loading: false});
                }
            })
            .catch(err => {
                console.log({...err});
                this.setState({loading: false, error: err.response.data});
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.exercises.length === 0 || this.state.current !== nextState.current) return true;
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
        const {exercises, stats, game, current, error, loading} = this.state;
        let gameRender = [
            <SingleChoice
                sentence={exercises[current] && exercises[current].sentence}
                options={exercises[current] && exercises[current].options}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <Syllable
                options={exercises[current] && exercises[current].options}
                correctIndex={exercises[current] && exercises[current].correct}
                correct={this.correct}
                incorrect={this.incorrect}
            />
        ];
        let explanation;
        if (this.state.content) {
            explanation = <JsonToMarkdown content={this.state.content} />;
        }
        return (
            <Container maxWidth="md">
                {loading || error ? (
                    <Grid container justify="center" alignContent="center" style={{minHeight: "50vh"}}>
                        {error ? <Typography variant="h4">{error}</Typography> : <CircularProgress />}
                    </Grid>
                ) : (
                    <React.Fragment>
                        {explanation}
                        {exercises.length && current < exercises.length ? (
                            <React.Fragment>{gameRender[game]}</React.Fragment>
                        ) : (
                            <Box my={5}>
                                <Typography variant="h2" align="center">
                                    Felicitaciones, completaste el nivel!
                                </Typography>
                            </Box>
                        )}
                    </React.Fragment>
                )}
                {loading || error ? null : (
                    <Stats correct={stats.correct} incorrect={stats.incorrect} missing={exercises.length - current} />
                )}
            </Container>
        );
    }
}
