/** Prefix a site path with the deploy base (needed on GitHub Pages project sites). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
