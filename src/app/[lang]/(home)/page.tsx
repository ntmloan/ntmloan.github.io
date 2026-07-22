import Link from 'next/link';
import type { Folder, Item } from 'fumadocs-core/page-tree';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { source } from '@/lib/source';

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const docsHref = `/${lang}/docs`;

  const overview = source.getPage([], lang);
  const tree = source.getPageTree(lang);

  // any page or category (folder) added under content/docs automatically
  // shows up here — the overview/index page itself is excluded since its
  // content is already used as the intro above.
  const cards = tree.children.filter(
    (node): node is Item | Folder =>
      (node.type === 'page' || node.type === 'folder') &&
      !(node.type === 'page' && node.url === docsHref),
  );

  return (
    <div className="flex flex-col flex-1 px-4 py-12 md:py-16 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">{overview?.data.title}</h1>
        <p className="text-fd-muted-foreground max-w-2xl mx-auto">{overview?.data.description}</p>
      </div>
      <Cards>
        {cards.map((node) => {
          const href = node.type === 'page' ? node.url : (node.index?.url ?? docsHref);

          return (
            <Card
              key={href}
              icon={node.icon}
              title={node.name}
              description={node.description}
              href={href}
            />
          );
        })}
      </Cards>
      <p className="text-center text-sm text-fd-muted-foreground mt-10">
        <Link href={docsHref} className="font-medium underline">
          {overview?.data.title}
        </Link>
      </p>
    </div>
  );
}
