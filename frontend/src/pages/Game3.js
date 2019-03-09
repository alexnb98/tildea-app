import React, {Component} from 'react';
import Letter from '../components/Letter';
import data from '../assets/data/Game-3-Data';
import EasyBoard from '../components/EasyBoard';
import Sentence from '../components/Sentence';


class Game3 extends Component {
    render() {
        return (
            <div>
                <h1>Helluo from game 3</h1>
                <div className="container">
                    <EasyBoard></EasyBoard>
                </div>
            </div>
        )
    }
}

export default Game3;