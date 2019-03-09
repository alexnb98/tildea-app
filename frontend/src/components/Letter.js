import React from 'react';
import PropTypes from 'prop-types';


const Letter = (props) => {
    return (
            <span className={`${props.className} font-weight-light p-sm-2 p-0 text-center m-auto align-center`} id="letter" onClick={props.onClick}>
                {props.children}
            </span>
    )
}

Letter.propTypes = {
    accent: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
}

export default Letter;