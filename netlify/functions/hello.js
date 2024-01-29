const stripe = require('stripe')(process.env.STRIPE_SECRET);

const YOUR_DOMAIN = 'https://moleculeworks.com/';

export default async (req, context) => {

  const q1 = new URL(req.url).searchParams.get('q1')

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1Odh8QKVWxESeTWrzztr10Yz',
        quantity: q1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  return new Response("url: " + session.url);
};
