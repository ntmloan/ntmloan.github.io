import { publicSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default async function Layout({ children, params }: LayoutProps<'/[lang]/docs'>) {
  const { lang } = await params;

  return (
    <DocsLayout tree={publicSource.getPageTree(lang)} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
