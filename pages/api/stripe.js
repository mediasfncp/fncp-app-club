import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET)

export default async function handler(req,res){

 const session = await stripe.checkout.sessions.create({
  mode:"payment",
  line_items:[{
    price:process.env.PRICE_1,
    quantity:1
  }],
  success_url:process.env.URL,
  cancel_url:process.env.URL
 })

 res.json({url:session.url})
}
