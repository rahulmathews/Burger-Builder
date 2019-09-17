import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 

const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients).map((igKey) => {
        let arr = [];
        for(let i = 0; i < props.ingredients[igKey]; i++){
            arr.push(<BurgerIngredient key={igKey + i} type={igKey}/>);
        }
        return arr;
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients }
            <BurgerIngredient type="bread-top"/>
        </div>
    );
}

export default burger;