import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_P9pIOUv6MyZJFB31clRwKo4b00PDeaGog6'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Gour Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/RZV.svg'
            description={`Your total amount is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;