import React, { Component } from 'react';
import styles from '../assets/css/Game.module.css';
import Sentence from '../components/Sentence';


const EasyBoard = props => {
    return (
        <div className={`d-flex flex-row container-fluid m-auto`}>
            <div className="row py-5 my-5">
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right">
                  <Sentence sentence="hellou2"></Sentence>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <Sentence sentence="hellou2"></Sentence>
                </div>
              </div>
        </div>
    )
}

export default EasyBoard;

