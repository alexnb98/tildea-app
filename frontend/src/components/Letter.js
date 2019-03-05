import React from 'react';
import PropTypes from 'prop-types';

function Letter(props) {
    return (
        <span className="letter" onClick={props.onClick} accent={props.accent}>
         {props.value} 
        </span>
    )
}

Letter.propTypes = {
    accent: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
}

export default Letter;