import { Seo } from '@global/models/seo';
import { Image } from '@global/models/image';
export class Blog {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public image: Image,
    public slug: string,
    public published: boolean,
    public seo: Seo
  ) {}
}
