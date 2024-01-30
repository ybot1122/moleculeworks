const stripe = require('stripe')(process.env.STRIPE_SECRET);

const YOUR_DOMAIN = 'https://moleculeworks.com/';

export default async (req, context) => {

  const cart = new URL(req.url).searchParams;

  const line_items = [];

  cart.forEach((value, key) => {
    line_items.push({
      price: key,
      quantity: value,
    })
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  return new Response(session.url);
};
