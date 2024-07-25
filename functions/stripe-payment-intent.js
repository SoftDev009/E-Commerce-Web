import dotenv from "dotenv"
dotenv.config()
// Connect to the Stripe payment system
import Stripe from "stripe"
const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  const { shipping_fee, total_amount } = JSON.parse(event.body)
  const calculateOrderAmount = () => {
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return (shipping_fee + total_amount) * 100
  }
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "INR",
      description: "product name",
      shipping: {
        name: "user name",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
