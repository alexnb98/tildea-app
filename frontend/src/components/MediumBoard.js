import React, { Component } from 'react';
import Option from '../components/Option';


const MediumBoard = props => {
    return (
        <div className="row py-5 my-5">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center border-right">
                <Option 
                option={props.option}
                onClick={props.onClick}
                >
                </Option>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <Option 
                option={props.option}
                onClick={props.onClick}
                >
                </Option>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <Option 
                option={props.option}
                onClick={props.onClick}
                >
                </Option>
            </div>
            </div>
    )
}

export default MediumBoard;

