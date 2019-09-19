import React, { Component } from 'react'

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate = () => {
        console.log('[Order Summary] will update')
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey} : {this.props.ingredients[igKey]}
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
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary