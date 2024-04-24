import { Seo } from '@global/models/seo';
export class Page {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public slug: string,
    public published: boolean,
    public seo: Seo
  ) {}
}
