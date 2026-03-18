const BOT_AGENTS = /whatsapp|twitterbot|facebookexternalhit|linkedinbot|slackbot|telegrambot/i;

export default async (request, context) => {
  const userAgent = request.headers.get("user-agent") || "";

  if (!BOT_AGENTS.test(userAgent)) {
    return context.next();
  }

  const url = new URL(request.url);
  const path = url.pathname;

  if (!path.startsWith("/posts/")) {
    return context.next();
  }

  const slug = path.replace("/posts/", "");
  const siteUrl = "https://tauraigombera.com";

  const posts = {
    "the-ussd-trap-why-malawi-banks-are-funding-their-own-disruption": {
      title: "The USSD Trap: Why Malawi Banks Are Funding Their Own Disruption",
      description: "Back in the day, USSD was a hero of financial inclusion...",
      image: "/burn-the-ussd.png",
    },
  };

  const meta = posts[slug];
  if (!meta) return context.next();

  const html = `<!DOCTYPE html>
<html>
  <head>
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${siteUrl}${meta.image}" />
    <meta property="og:url" content="${siteUrl}${path}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${siteUrl}${meta.image}" />
  </head>
  <body></body>
</html>`;

  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
};

export const config = { path: "/posts/*" };