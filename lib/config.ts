/** Base path for GitHub Pages deployment. Empty string for custom domain / local dev. */
export const BASE_PATH = "/wiseguysbarbers.co.uk";

/** Prefix a public asset path with the base path */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
