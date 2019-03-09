import React, { Component } from 'react';
import Option from '../components/Option';


const EasyBoard = props => {
    const i = Math.floor(Math.random() * (props.option.length));
    const j = i === 0 ? i + 1 : i - 1;
    const isICorrect = (i === 0 ? true : false).toString();
    const isJCorrect = (j === 0 ? true : false).toString();

    return (
            <div className="row py-4 my-4">
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right">
                    <Option 
                    option={props.option[i]}
                    click={isICorrect ? props.handleSuccess : props.handleError}
                    correct={isICorrect}
                    >
                    </Option>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Option 
                    option={props.option[j]}
                    click={isJCorrect ? props.handleSuccess : props.handleError}
                    correct={isJCorrect}
                    >
                    </Option>
                </div>
            </div>
    )
}

export default EasyBoard;

