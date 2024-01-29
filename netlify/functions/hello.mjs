export default async (req, context) => {
  const processEnv = process.env.STRIPE_SECRET

  const NetlifyEnv = Netlify.env.get("STRIPE_SECRET");
  
  return new Response("processEnv: " + processEnv + "\n netlifyEnv: " + NetlifyEnv);
};
