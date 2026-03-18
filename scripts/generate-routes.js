import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = readdirSync(join(__dirname, "../src/blogs"));

const routes = files
  .filter((f) => f.endsWith(".md"))
  .map((f) => `/posts/${f.replace(".md", "")}`);

const all = ["/", "/posts", "/about", ...routes];

const pkgPath = join(__dirname, "../package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

pkg.reactSnap = pkg.reactSnap || {};
pkg.reactSnap.include = all;

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log("Generated routes:", all);