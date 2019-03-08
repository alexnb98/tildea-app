import React, { Component } from "react";
import data from "../assets/data/Game-2-Data";
import Sentence from '../components/Sentence';
import Option from "../components/Option";
import Score from "../components/Score";

class Game2 extends Component {
    state = {
        data: data,
        success: 0,
        progress: 0,
        error: 0
    }

    handleProgress = (e) => {
        e.persist();
        let newProgress = this.state.progress;
        newProgress ++;
        this.classToggle(e, 'bg-success');
        setTimeout( () => {
            this.classToggle(e, 'bg-success');
            this.setState({
                progress: newProgress
            })
        }, 500)
    }
    
    handleError = (e) => {
        e.persist();
        let newErrors = this.state.error;
        newErrors++;
        this.classToggle(e, 'bg-danger');
        setTimeout( () => {
          this.classToggle(e, 'bg-danger');
          this.setState({
              error: newErrors
          })
        }, 500)
    }

    classToggle = (e, className) => {
        e.target.classList.toggle(className);
    }

    
    render() {
        const {data, success, error, progress} = this.state;
        return (
          <div>
            <div className="container">
              <Sentence sentence={data[progress].sentence} />
              <div className="row py-5 my-5">
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right">
                  <Option
                    click={this.handleProgress}
                    option={data[progress].correct}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <Option
                    click={this.handleError}
                    option={data[progress].incorrect}
                  />
                </div>
              </div>

              <Score
                score={progress}
                mistakes={error}
                wordsRemaining={data.length - progress}
              />
            </div>
          </div>
        );
    }
}

export default Game2;