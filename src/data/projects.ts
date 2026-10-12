/**
 * Portfolio data. To add real photography:
 *   1. put files in /public/images/<slug>/
 *   2. set `src: '/images/<slug>/file.jpg'` on the photo
 *   3. write `alt` as one plain sentence describing the room
 * Photos without `src` render as labelled placeholders.
 */

export interface Photo {
  src?: string;
  alt: string;
  caption?: string;
  /** placeholder fill until real photography is added */
  tone?: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  /** short region shown on cards */
  region: string;
  featured?: boolean;
  scope?: string;
  year?: string;
  photographer?: string;
  intro?: string;
  body?: string[];
  cover: Photo;
  gallery?: Photo[];
  quote?: { text: string; by: string };
}

export const projects: Project[] = [
  {
    slug: 'spring-lake-redefined',
    title: 'Spring Lake Redefined',
    location: 'Spring Lake, New Jersey',
    region: 'New Jersey',
    featured: true,
    scope: 'New construction',
    year: '[Year]',
    photographer: '[Photographer]',
    intro: '[One-line project story — e.g. a three-year build, from first drawings to reveal day.]',
    body: [
      '[Two short paragraphs on the brief: who lives here, how they use the house, and what they asked for.]',
      '[What Valerie did with it: the palette, the signature rooms — foyer, library, bar — and the details clients notice first.]',
    ],
    cover: { alt: '[Alt text: the Spring Lake kitchen]', tone: '#B9AC98' },
    gallery: [
      { alt: '[Alt text: the foyer]', caption: 'Foyer', tone: '#B9AC98' },
      { alt: '[Alt text: the library]', caption: 'Library', tone: '#5A4C3F' },
      { alt: '[Alt text: the bar]', caption: 'Bar', tone: '#3E3833' },
    ],
    quote: {
      text: 'The best decision we made throughout the three-year journey of building our dream home.',
      by: 'JC — Spring Lake, New Jersey',
    },
  },
  {
    slug: 'hudson-valley-hidden-oak-farm',
    title: 'Hidden Oak Farm',
    location: 'Hudson Valley, New York',
    region: 'Hudson Valley',
    featured: true,
    cover: { alt: '[Alt text: the family room]', tone: '#8E8A78' },
    quote: {
      text: 'Our home is now a place where memories are made.',
      by: 'CE — Hudson Valley, New York',
    },
  },
  {
    slug: 'tribeca-pied-a-terre',
    title: 'Tribeca Pied-à-Terre',
    location: 'Tribeca, New York City',
    region: 'New York City',
    featured: true,
    cover: { alt: '[Alt text: the living room]', tone: '#4F4A44' },
  },
  {
    slug: 'nantucket-harbor-views',
    title: 'Nantucket Harbor Views',
    location: 'Nantucket, Massachusetts',
    region: 'Nantucket',
    featured: true,
    cover: { alt: '[Alt text: the family room]', tone: '#A7B2B3' },
    quote: {
      text: 'I have never worked with a decorator who listened so well.',
      by: 'DW — Nantucket, Massachusetts',
    },
  },
  {
    slug: 'east-hampton-haven',
    title: 'East Hampton Haven',
    location: 'East Hampton, New York',
    region: 'The Hamptons',
    featured: true,
    cover: { alt: '[Alt text: the living room]', tone: '#D4CBBD' },
  },
  {
    slug: 'lake-life',
    title: 'Lake Life',
    location: 'Lake Hopatcong, New Jersey',
    region: 'Lake Hopatcong',
    featured: true,
    cover: { alt: '[Alt text: the lake house living room]', tone: '#6F5E4E' },
    quote: {
      text: 'On budget, on schedule, with no surprises.',
      by: 'JB — Lake Hopatcong & Mendham, New Jersey',
    },
  },
  {
    slug: 'california-vibe',
    title: 'California Vibe',
    location: '[Location]',
    region: '[Region]',
    cover: { alt: '[Alt text: the family room]', tone: '#C2B49E' },
  },
  {
    slug: 'hudson-valley-modern-farmhouse',
    title: 'Hudson Valley Modern Farmhouse',
    location: 'Dutchess County, New York',
    region: 'Hudson Valley',
    cover: { alt: '[Alt text: the family room]', tone: '#9A8F7C' },
  },
  {
    slug: 'revamped-colonial',
    title: 'Revamped Colonial',
    location: 'Mendham, New Jersey',
    region: 'New Jersey',
    cover: { alt: "[Alt text: the butler's pantry]", tone: '#5E5A52' },
  },
  {
    slug: 'mountaintop-retreat',
    title: 'Mountaintop Retreat',
    location: '[Location]',
    region: '[Region]',
    cover: { alt: '[Alt text: the home library]', tone: '#7D6B58' },
  },
  {
    slug: 'mountaintop-retreat-ii',
    title: 'Mountaintop Retreat II',
    location: '[Location]',
    region: '[Region]',
    cover: { alt: '[Alt text: the primary bedroom]', tone: '#B5A895' },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
