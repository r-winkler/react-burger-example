import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        // axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
        //     .then( response => {
        //         dispatch(setIngredients(response.data));
        //     } )
        //     .catch( error => {
        //         dispatch(fetchIngredientsFailed());
        //     } );
        new Promise((resolve, reject) => {
            // Succeed half of the time.
            if (Math.random() > 0.1) {
                return resolve(  {
                    salad: 0,
                    meat: 0,
                    bacon: 0,
                    cheese: 0
                })
            } else {
                return reject("FAILURE")
            }
        }).then( response => {
            console.log(response)
                dispatch(setIngredients(response));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};
