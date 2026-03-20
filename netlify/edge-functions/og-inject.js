export default async (request, context) => {
  const url = new URL(request.url);
  const slug = url.pathname.replace("/posts/", "");

  const posts = {
    "the-ussd-trap-why-malawi-banks-are-funding-their-own-disruption": {
      title: "The USSD Trap: Why Malawi Banks Are Funding Their Own Disruption",
      excerpt: "Back in the day, USSD was a hero of financial inclusion. Back then, it made perfect sense because networks were slow, most people had feature phones, smartphones were expensive, and mobile data was something you thought twice about buying.",
      image: "https://www.tauraigombera.com/burn-the-ussd.webp",
    },
  };

  const meta = posts[slug];
  if (!meta) return context.next();

  const response = await context.next();
  const html = await response.text();

  const ogTags = `
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.excerpt}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:url" content="https://www.tauraigombera.com${url.pathname}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.excerpt}" />
    <meta name="twitter:image" content="${meta.image}" />
  `;

  const modified = html.replace("<head>", `<head>${ogTags}`);
  return new Response(modified, {
    headers: { "content-type": "text/html" },
  });
};

export const config = { path: "/posts/*" };