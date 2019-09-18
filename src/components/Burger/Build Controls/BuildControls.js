import React from 'react';

import BuildControl from './Build Control/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Meat', type : 'meat'}
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((obj) => {
                    return <BuildControl 
                            key={obj.label} 
                            label={obj.label}
                            added={() => props.ingredientAdded(obj.type)}
                            removed={() => props.ingredientRemoved(obj.type)}
                            disabled={props.disabled[obj.type]}
                    />
                })
            }
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default buildControls;