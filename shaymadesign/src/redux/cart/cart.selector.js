import { createSelector } from 'reselect';

//takes the whole reducer state and returns part of it 
const selectCart = state => state.cart;

//selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumalateQuantity, cartItem) => 
        accumalateQuantity + cartItem.quantity,
        0
    
    )
    );