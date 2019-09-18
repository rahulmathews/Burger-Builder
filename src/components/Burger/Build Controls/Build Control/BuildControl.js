import React from 'react';

import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} disabled={props.disabled} onClick={props.removed}>
                -
            </button>
            <button className={classes.More} onClick={props.added}>+</button>
        </div>
    )
}

export default buildControl;