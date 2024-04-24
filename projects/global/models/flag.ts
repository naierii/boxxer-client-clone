import { Image } from './image';
export class Flag {
  constructor(
    public _id: string,
    public title: string,
    public image: Image,
    public weight: number
  ) {}
}
