// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "copperdevs";
export const SITE_DESCRIPTION =
  "blog or somethign idk :3";
export const TWITTER_HANDLE = "@copperdevs";
export const GITHUB_USERNAME = "copperdevs";
export const MY_NAME = "copperdevs";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
