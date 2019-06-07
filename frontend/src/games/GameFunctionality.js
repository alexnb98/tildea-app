import React, {Component} from "react";
import data from "../assets/data/agudas-1";
// import data from "../assets/data/agudas-start";
// import silabaTonica from "../assets/data/silaba-tonica-data";
import {Container, Box, Typography} from "@material-ui/core";
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
        disable: false
    };

    componentDidMount() {
        if (this.props.match.path.includes("/agudas/")) {
            this.setState({exercises: data.exercises, game: data.game});
        } else if (this.props.match.path === "/silaba-tonica/") {
            this.setState({exercises: data.exercises, game: data.game});
        }
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
        const {exercises, stats, game, current} = this.state;
        let gameRender = [
            <SingleChoice
                sentence={exercises[current] && exercises[current].sentence}
                options={exercises[current] && exercises[current].options}
                correct={this.correct}
                incorrect={this.incorrect}
            />,
            <Syllable
                word={exercises[current] && exercises[current].word}
                correctIndex={exercises[current] && exercises[current].correct}
                correct={this.correct}
                incorrect={this.incorrect}
            />
        ];
        let explanation;
        if (data.content) {
            explanation = <JsonToMarkdown content={data.content} />;
        }
        return (
            <Container maxWidth="md">
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
                <Stats correct={stats.correct} incorrect={stats.incorrect} missing={exercises.length - current} />
            </Container>
        );
    }
}
