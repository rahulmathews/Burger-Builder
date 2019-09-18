import React from 'react'

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary