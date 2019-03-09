import React, { Component } from 'react';
import EasyBoard from '../components/EasyBoard';


const HardBoard = props => {
    return (
        <div>
            <EasyBoard option={props.option} onClick={props.onClick}></EasyBoard>
            <EasyBoard option={props.option} onClick={props.onClick}></EasyBoard>
        </div>
    )
}

export default HardBoard;

