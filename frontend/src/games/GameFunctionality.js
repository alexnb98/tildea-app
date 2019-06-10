import React, {Component} from "react";
import {Grid, Container, Box, Typography, CircularProgress} from "@material-ui/core";
import axios from "axios";

// components
import utils from "../utils/utils";
import Stats from "../components/Stats";
import SingleChoice from "../components/SingleChoice";
import Syllable from "../components/Syllable";
import JsonToMarkdown from "../components/JsonToMarkdown";
import AccentLetter from "../components/AccentLetter";

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
                if (err.response) {
                    this.setState({loading: false, error: err.response.data});
                }
            });
    }

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

    render() {
        const {exercises, stats, game, current, error, loading} = this.state;
        const curEx = exercises[current]; // current exercise
        let gameRender = [
            <SingleChoice
                sentence={curEx && curEx.sentence}
                options={curEx && curEx.options}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <Syllable
                options={curEx && curEx.options}
                correctIndex={curEx && curEx.correct}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <AccentLetter word={curEx && curEx.word} correct={this.correct} incorrect={this.error} />
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
