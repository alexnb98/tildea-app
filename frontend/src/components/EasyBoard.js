import React, { Component } from 'react';
import styles from '../assets/css/Game.module.css';
import Option from '../components/Option';


const EasyBoard = props => {
    return (
        <div className="d-flex flex-row container-fluid m-auto">
            <div className="row py-5 my-5">
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right">
                    <Option 
                    option="hellou2"
                    onClick={props.onClick}
                    >
                    </Option>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Option 
                    option="hellou2"
                    onClick={props.onClick}
                    >
                    </Option>
                </div>
              </div>
        </div>
    )
}

export default EasyBoard;

