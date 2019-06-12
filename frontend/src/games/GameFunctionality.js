import React, {Component} from "react";
import {Grid, Container, Box, Typography, CircularProgress} from "@material-ui/core";
import axios from "axios";
import {correctClass, incorrectClass, nextLevel, fisherYatesShuffle} from "../utils/utils";

// components
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
        current: 0,
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
                const exercises = fisherYatesShuffle(data.exercises);
                if (data.sentence) {
                    this.setState({
                        exercises,
                        game: data.game,
                        loading: false,
                        sentence: data.sentence
                    });
                } else {
                    this.setState({exercises, game: data.game, loading: false});
                }
            })
            .catch(err => {
                console.log({...err});
                if (err.response) {
                    return this.setState({loading: false, error: err.response.data});
                }
                return this.setState({loading: false, error: "Algo salio mal :( Intenta más tarde."});
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
            current.classList.add(correctClass);
            setTimeout(() => {
                current.classList.remove(correctClass);
                if (this.state.elements.length) {
                    this.state.elements.forEach(el => el.classList.remove(incorrectClass));
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
            current.classList.add(incorrectClass);
            setTimeout(() => {
                current.classList.remove(incorrectClass);
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
            current.classList.add(incorrectClass);
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
        if (!url.includes("tutorial")) this.handleRequest(url);
    };

    render() {
        const {exercises, stats, game, current, error, loading} = this.state;
        const curEx = exercises[current]; // current exercise
        let gameRender = [
            <Game1 options={curEx && curEx.options} correct={this.correct} incorrect={this.incorrect} />,
            <Game2
                options={curEx && curEx.options}
                correctIndex={curEx && curEx.correct}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <Game3 word={curEx && curEx.word} correct={this.correct} incorrect={this.error} />
        ];

        let sentence = "Escoje la escritura correcta";
        if (this.state.sentence) sentence = this.state.sentence;
        if (curEx && curEx.sentence) sentence = curEx.sentence;

        return (
            <Container maxWidth="md">
                {loading || error ? (
                    <Grid container justify="center" alignContent="center" style={{minHeight: "50vh"}}>
                        {error ? <Typography variant="h4">{error}</Typography> : <CircularProgress />}
                    </Grid>
                ) : (
                    <React.Fragment>
                        {exercises.length && current < exercises.length ? (
                            <React.Fragment>
                                <Box boxShadow={2} mt="15vh" mb="10vh" p={2} borderRadius={8}>
                                    <Typography variant="h2" align="center">
                                        {sentence}
                                    </Typography>
                                </Box>
                                <Grid container justify="center">
                                    {gameRender[game]}
                                </Grid>
                                <Box mt="10vh">
                                    <Stats
                                        correct={stats.correct}
                                        incorrect={stats.incorrect}
                                        missing={exercises.length - current}
                                    />
                                </Box>
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
