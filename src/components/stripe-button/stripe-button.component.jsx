import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100 // convert to cent
    const publishableKey = 'pk_test_KmvJcCR0RYFQewT7eHpQrVNW003BReUa4p'

    const onToken = (token) =>{
        console.log(token)
        alert('Payment Successfully')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name= 'Eric Shop Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} // success callback
        />
    )
}

export default StripeCheckoutButton