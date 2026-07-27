'use client';

import { useDocsSearch } from 'fumadocs-core/search/client';
import { oramaStaticClient } from 'fumadocs-core/search/client/orama-static';
import { create } from '@orama/orama';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';

// Body-text paragraph matches are excluded so results only surface title/heading hits.
export default function CustomSearchDialog(props: SharedProps) {
  const { locale } = useI18n();
  const client = oramaStaticClient({
    locale,
    // fumadocs-core's default initOrama passes the raw locale code (e.g. "en")
    // straight into Orama's `language` option, which only accepts full names
    // (e.g. "english") and throws for anything else — mirror the tokenizer
    // config from src/app/api/search/route.ts so the client can load the index.
    initOrama: (loc) =>
      create({
        schema: { _: 'string' },
        language: loc === 'en' ? 'english' : undefined,
      }),
    search: { where: { type: ['page', 'heading'] } },
  });
  const { search, setSearch, query } = useDocsSearch({ client });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
