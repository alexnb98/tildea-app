import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/css/Letter.module.css';


function Letter(props) {
    return (
        <span className={`${styles.letter} display-1 display-sm-5 p-sm-2 p-0 text-center m-auto align-center`} onClick={props.onClick} accent={props.accent}>
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