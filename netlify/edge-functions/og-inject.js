const BOT_AGENTS = /whatsapp|twitterbot|facebookexternalhit|linkedinbot|slackbot|telegrambot/i;

export default async (request, context) => {
  const userAgent = request.headers.get("user-agent") || "";
  if (!BOT_AGENTS.test(userAgent)) return context.next();

  const url = new URL(request.url);
  const slug = url.pathname.replace("/posts/", "");

  const posts = {
    "the-ussd-trap-why-malawi-banks-are-funding-their-own-disruption": {
      title: "The USSD Trap: Why Malawi Banks Are Funding Their Own Disruption",
      description: "Back in the day, USSD was a hero of financial inclusion. Here is why Malawi banks are funding their own disruption.",
      image: "https://www.tauraigombera.com/burn-the-ussd.png",
    },
  };

  const meta = posts[slug];
  if (!meta) return context.next();

  return new Response(
    `<!DOCTYPE html>
<html>
  <head>
    <title>${meta.title}</title>
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:url" content="https://www.tauraigombera.com${url.pathname}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.image}" />
  </head>
  <body></body>
</html>`,
    { headers: { "content-type": "text/html" } }
  );
};

export const config = { path: "/posts/*" };