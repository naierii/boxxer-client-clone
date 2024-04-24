import { Seo } from './seo';

export interface Page {
  _id: string;
  title: string;
  description: string;
  slug: string;
  published: boolean;
  seo: Seo;
}
