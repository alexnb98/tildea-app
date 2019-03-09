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
        end: false,
        progress: 0,
        errors: 0
    }

    classToggle = (e, className) => {
        e.target.classList.toggle(className);
    }

    handleSuccess = e => {
        this.classToggle(e, colorSuccess);

        setTimeout(() => {
            this.setState({
                progress: this.state.progress+1,
            })
            utils.resetLetterColors(".rounded .shadow", colorSuccess, colorDanger);
        }, 400)
    }

    handleError = e => {
        this.classToggle(e,colorDanger);
    }

    render() {
        const {words, end, progress, errors} = this.state;

        return (
            <div>
                <h1 className="font-weight-light text-center mt-5">{!this.state.end ? "Click the correct word!" : "Congratulations, you have completed the level!"}</h1>
                <div className="container">
                    <h1>Easy board</h1>
                    <EasyBoard 
                    option={words.easy[progress]}
                    handleSuccess={this.handleSuccess}
                    handleError={this.handleError}
                    ></EasyBoard>
                    {/* <h1>Medium board</h1>
                    <MediumBoard></MediumBoard>
                    <h1>Hard</h1>
                    <HardBoard></HardBoard> */}
                </div>
            </div>
        )
    }
}

export default Game3;