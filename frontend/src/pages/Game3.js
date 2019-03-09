import React, {Component} from 'react';
import data from '../assets/data/Game-3-Data';
import EasyBoard from '../components/EasyBoard';
import MediumBoard from '../components/MediumBoard';
import HardBoard from '../components/HardBoard';
import Score from '../components/Score';
import utils from '../utils/utils';


const colorSuccess = "bg-success";
const colorDanger = "bg-danger";
class Game3 extends Component {

    state = {
        words: Object.assign(data),
        progress: 0,
        errors: 0,
        difficultyIndex: 0,
        difficulties: Object.keys(data),
        isComplete: false,
    }

    handleNextDifficultyLevel() {
        console.log("this method runs");
    }

    handleSuccess = e => {
        e.persist();
        utils.classToggle(e, colorSuccess);
        setTimeout(() => {
            this.setState({
                progress: this.state.progress+1,
            })
            utils.classToggle(e, colorSuccess);

            const {words, progress, difficulties, difficultyIndex} = this.state;
            const ammountOfWordsInTheActualDifficultyLevel = words[difficulties[difficultyIndex]].length;
            if(progress === ammountOfWordsInTheActualDifficultyLevel) {
                this.setState({
                    difficultyIndex: difficultyIndex + 1,
                    progress: 0,
                })
                this.handleNextDifficultyLevel();
            }
        }, 400)
    }

    handleError = e => {
        e.persist();
        utils.classToggle(e,colorDanger);
        setTimeout(() => {
            this.setState({
                errors: this.state.errors + 1,
            })
            utils.classToggle(e,colorDanger);
        },400)
    }

    render() {
        const {words, progress, isComplete, errors, difficulties, difficultyIndex} = this.state;
        console.log(difficulties[difficultyIndex])
        return (
            <div>
                <h1 className="font-weight-light text-center mt-5">{!isComplete ? "Click the correct word! ( if you can :P )" : "Congratulations, you have completed the level!"}</h1>
                <div className="container">

                    {
                        difficulties[difficultyIndex] === "easy" ? 
                        <EasyBoard 
                        option={words.easy[progress] || []}
                        handleSuccess={this.handleSuccess}
                        handleError={this.handleError}
                        ></EasyBoard> :
                        null
                    }

                    {
                        difficulties[difficultyIndex] === 'medium' ? 
                        <MediumBoard
                        option={words.medium[progress] || []}
                        handleSuccess={this.handleSuccess}
                        handleError={this.handleError}
                        ></MediumBoard> : 
                        null
                    }

                    {
                        difficulties[difficultyIndex] === 'hard' ? 
                        <HardBoard
                        option={words.hard[progress] || []}
                        handleSuccess={this.handleSuccess}
                        handleError={this.handleError}
                        ></HardBoard> : 
                        null
                    }

                
                </div>
                <Score
                    score={progress}
                    mistakes={errors}
                    wordsRemaining={words[difficulties[difficultyIndex]].length - progress}
                >

                </Score>
            </div>
        )
    }
}

export default Game3;