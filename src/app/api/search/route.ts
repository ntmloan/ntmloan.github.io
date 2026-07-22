import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
  // Orama has no Vietnamese stemmer; fall back to the language-agnostic tokenizer for `vi`.
  localeMap: {
    vi: {},
  },
});
