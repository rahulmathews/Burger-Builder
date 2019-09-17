import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map((igKey) => {
        let arr = [];
        for(let i = 0; i < props.ingredients[igKey]; i++){
            arr.push(<BurgerIngredient key={igKey + i} type={igKey}/>);
        }
        return arr;
    }).reduce((arr, ele) => {
        return arr.concat(ele);
    }, []);

    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients </p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients }
            <BurgerIngredient type="bread-top"/>
        </div>
    );
}

export default burger;