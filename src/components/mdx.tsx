import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type ImageZoomSrc = ComponentProps<typeof ImageZoom>['src'];

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    ImageZoom,
    img: ({ src, alt, className, ...props }) => {
      if (!src) return null;

      return (
        <ImageZoom
          {...props}
          src={src as unknown as ImageZoomSrc}
          alt={alt ?? ''}
          className={cn('rounded-xl', className)}
          zoomInProps={{ className: 'rounded-xl' }}
        />
      );
    },
    Step,
    Steps,
    Tab,
    Tabs,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
