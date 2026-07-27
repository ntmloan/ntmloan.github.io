import { publicSource } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// Static export has no server to answer live queries, so the search index
// is pre-built at compile time and served as a static JSON file instead.
export const { staticGET: GET } = createFromSource(publicSource, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
  // Orama has no Vietnamese/Japanese stemmer; fall back to the language-agnostic tokenizer.
  localeMap: {
    vi: {},
    ja: {},
  },
});
