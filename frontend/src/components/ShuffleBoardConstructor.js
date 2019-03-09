import React from 'react';
import Option from './Option';
import utils from '../utils/utils';

const BoardConstructor = props => {
    const i = Math.floor(Math.random() * props.option.length);
    let j, isICorrect, isJCorrect;

    const AllOptions = props.option.map((c,i) => {
        let colClass = 'cod-md-6';
        if(props.option.length % 2 === 0) {
            return (
                <div className={`${colClass} d-flex align-items-center justify-content-center border-right`}>
                    <Option 
                    option={props.option[i]}
                    click={isICorrect ? props.handleSuccess : props.handleError}
                    >
                    </Option>
                </div>
            )
        }

    })

    return (
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
            </div>
    )
}

export default BoardConstructor;