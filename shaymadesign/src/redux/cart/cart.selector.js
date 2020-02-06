import { createSelector } from 'reselect';


//takes the whole reducer state and returns part of it 
const selectCart = state => state.cart;

//selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumalateQuantity, cartItem) => 
        accumalateQuantity + cartItem.quantity,
        0
    )
    );

    export const selectCartTotal =  createSelector(
        [selectCartItems],
        cartItems =>
        cartItems.reduce(
            (accumulateQuantity , cartItem) =>
            accumulateQuantity + cartItem.quantity * cartItem.price,
            0
        )
    )