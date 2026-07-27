import { publicSource } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

export function GET() {
  return new Response(llms(publicSource).index());
}
