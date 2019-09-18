import React from 'react'

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey} : {props.ingredients[igKey]}
                    </span>
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Chekout?</p>
        </Aux>
    )
}

export default orderSummary