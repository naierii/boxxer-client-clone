import { Image } from './image';
export class Logo {
  constructor(
    public _id: string,
    public title: string,
    public type: string,
    public image: Image,
    public weight: number
  ) {}
}
