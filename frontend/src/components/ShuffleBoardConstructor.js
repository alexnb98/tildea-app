import React from 'react';
import Option from './Option';
import utils from '../utils/utils';

const ShuffleBoardConstructor = props => {
    // static hellou = "string";
    const AllOptions = props.option.map((c,i) => {
        if(i === 0) {
            return (
                <Option 
                option={props.option[i]}
                click={props.handleSuccess}
                >
                </Option>
            )
        } else {
            return (
                <Option 
                option={props.option[i]}
                click={props.handleError}
                >
                </Option>
            )
        }
    })

    const shuffledOptions = props.triggerShuffle ? utils.fisherYatesShuffle(AllOptions) : AllOptions;

    const AllStyledOptions = shuffledOptions.map((c,i,a) => {
        const divClass = i === 0 && a.length % 2 === 1 ? 'col-md-12' : 'col-md-6 mt-5';
        return (
            <div className={`${divClass} d-flex align-items-center justify-content-center`}>
                {c}
            </div>
        )
    }) 

    return (
        <div className="row py-4 my-4">
            {AllStyledOptions}
        </div>
    )
}

export default ShuffleBoardConstructor;