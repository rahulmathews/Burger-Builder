import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build Controls/BuildControls';

const INGREDIENT_PRICES = {
    'salad' : 0.5,
    'bacon' : 0.7,
    'meat'  : 0.6,
    'cheese': 0.4
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...props}
    // }
    state = {
        ingredients : {
            'salad' : 0,
            'bacon' : 0,
            'cheese' : 0,
            'meat' : 0
        },
        'totalPrice' : 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        if(oldCount <= 0){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const newPrice = this.setState.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        })
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled = {disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;