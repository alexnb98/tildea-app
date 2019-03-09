import React, {Component} from 'react';
import data from '../assets/data/Game-3-Data';
import EasyBoard from '../components/EasyBoard';


class Game3 extends Component {

    state = {
        words: data,
        end: false
    }

    render() {
        console.log(this.words);
        return (
            <div>
                <h1 className="font-weight-light text-center mt-5">{!this.state.end ? "Click the correct word!" : "Congratulations, you have completed the level!"}</h1>
                <div className="container">
                    <EasyBoard></EasyBoard>
                </div>
            </div>
        )
    }
}

export default Game3;