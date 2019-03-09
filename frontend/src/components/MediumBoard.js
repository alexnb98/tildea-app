import React from 'react';
import Option from '../components/Option';


const MediumBoard = props => {
    const i = Math.floor(Math.random() * (props.option.length));
    const j = i === 0 ? 1 : i === 1 ? 2 : 0; 
    const k = j === 2 ? 0 : j === 1 ? 2  : 1;
    console.log(i,j,k)
    const isICorrect = (i === 0 ? true : false);
    const isJCorrect = (j === 0 ? true : false);
    const isKCorrect = (k === 0 ? true : false);
    
    return (
        <div className="row py-5 my-5">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center border-right">
                <Option 
                option={props.option[i]}
                click={isICorrect ? props.handleSuccess : props.handleError}
                >
                </Option>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <Option 
                option={props.option[j]}
                click={isJCorrect ? props.handleSuccess : props.handleError}
                >
                </Option>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <Option 
                option={props.option[k]}
                click={isKCorrect ? props.handleSuccess : props.handleError}
                >
                </Option>
            </div>
        </div>
    )
}

export default MediumBoard;

