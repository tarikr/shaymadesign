import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

 const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price *100;
    const publishableKey = "pk_test_xusPhu542hHvOUR7TgmnEWyi00zwqI0Gew";
    const onToken = token =>{
        console.log(token);
        alert('Payment Sucessful');
    }


    return (
        <StripeCheckout 
        label= 'Pay Now'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your totals is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token ={onToken}
        stripeKey = {publishableKey}

        />
    )

};

export default StripeCheckoutButton;
