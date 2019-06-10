import React, {Component} from "react";
import {Grid, Container, Box, Typography, CircularProgress} from "@material-ui/core";
import axios from "axios";
import {utils, nextLevel} from "../utils/utils";

// components
import JsonToMarkdown from "../components/JsonToMarkdown";
import Stats from "../components/Stats";
import Game1 from "../games/Game1";
import Game2 from "../games/Game2";
import Game3 from "../games/Game3";
import GameFeedback from "../components/GameFeedback";
import dashboardLevels from "../utils/dashboardLevels";

export default class SigleChoice extends Component {
    state = {
        game: null,
        exercises: [],
        current: 5,
        stats: {
            correct: 0,
            incorrect: 0
        },
        elements: [],
        disable: false,
        loading: true,
        error: null
    };

    componentDidMount() {
        this.handleRequest(this.props.match.url);
    }

    handleRequest = url => {
        this.setState({loading: true});
        axios
            .get(`/api${url}`)
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
                if (err.response) {
                    this.setState({loading: false, error: err.response.data});
                }
            });
    };

    nextTask = () => {
        this.setState(state => {
            return {current: state.current + 1, disable: false, elements: []};
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
                if (this.state.elements.length) {
                    this.state.elements.forEach(el => el.classList.remove(utils.incorrect));
                }
                this.nextTask();
            }, 1000);
        }
    };

    //use if it should fire nextTast()
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

    // use if it only should increment incorrect stats
    error = e => {
        const current = e.currentTarget;
        if (!this.state.elements.includes(current)) {
            this.setState(state => {
                return {
                    stats: {...state.stats, incorrect: state.stats.incorrect + 1},
                    elements: [...state.elements, current]
                };
            });
            current.classList.add(utils.incorrect);
        }
    };

    resetState = () => {
        this.setState({current: 0, stats: {correct: 0, incorrect: 0}});
    };

    handleRepeat = () => {
        this.resetState();
    };

    handleNextLevel = () => {
        this.resetState();
        const url = nextLevel(this.props.match.url, dashboardLevels);
        this.props.history.push(url);
        this.handleRequest(url);
    };

    render() {
        const {exercises, stats, game, current, error, loading} = this.state;
        const curEx = exercises[current]; // current exercise
        let gameRender = [
            <Game1
                sentence={curEx && curEx.sentence}
                options={curEx && curEx.options}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <Game2
                options={curEx && curEx.options}
                correctIndex={curEx && curEx.correct}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <Game3 word={curEx && curEx.word} correct={this.correct} incorrect={this.error} />
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
                            <React.Fragment>
                                {gameRender[game]}
                                <Stats
                                    correct={stats.correct}
                                    incorrect={stats.incorrect}
                                    missing={exercises.length - current}
                                />
                            </React.Fragment>
                        ) : (
                            <Box my={5}>
                                <GameFeedback
                                    correct={stats.correct}
                                    incorrect={stats.incorrect}
                                    total={exercises.length}
                                    repeat={this.handleRepeat}
                                    next={this.handleNextLevel}
                                />
                            </Box>
                        )}
                    </React.Fragment>
                )}
            </Container>
        );
    }
}
