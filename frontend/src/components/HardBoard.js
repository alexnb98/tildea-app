import React from 'react';
import Option from '../components/Option';


const HardBoard = props => {
    const i = Math.floor(Math.random() * (props.option.length));
    const j = i === 0 ? 1 : i === 1 ? 2 : i === 2 ? 3 : 0; 
    const k = i === 0 ? 2 : i === 1 ? 3 : i === 2 ? 0 : 1;
    const l = i === 0 ? 3 : i === 1 ? 0 : i === 2 ? 1 : 2;
    const isICorrect = (i === 0 ? true : false); 
    const isJCorrect = (j === 0 ? true : false); 
    const isKCorrect = (k === 0 ? true : false); 
    const isLCorrect = (l === 0 ? true : false); 
    return (
        <div>
            <div className="row py-4 my-4">
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right">
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
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right mt-4">
                    <Option 
                    option={props.option[k]}
                    click={isKCorrect ? props.handleSuccess : props.handleError}
                    >
                    </Option>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Option 
                    option={props.option[l]}
                    click={isLCorrect ? props.handleSuccess : props.handleError}
                    >
                    </Option>
                </div>
            </div>
        </div>
    )
}

export default HardBoard;

