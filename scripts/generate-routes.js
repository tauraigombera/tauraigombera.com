import { readdirSync } from "fs";
import { writeFileSync } from "fs";

const files = readdirSync("./src/blogs");

const routes = files
  .filter((f) => f.endsWith(".md"))
  .map((f) => `/posts/${f.replace(".md", "")}`);

const all = ["/", "/posts", "/about", ...routes];

writeFileSync(
  "./routes.json",
  JSON.stringify(all, null, 2)
);

console.log("Generated routes:", all);