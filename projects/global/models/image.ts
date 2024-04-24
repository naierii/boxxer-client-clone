export class Image {
  constructor(
    public _id: string,
    public key: string,
    public alt: string,
    public version: number,
    public weight: number,
    public format: string
  ) {}
}
