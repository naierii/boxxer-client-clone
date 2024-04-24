export interface Term {
  _id: string;
  title: string;
  admin_title: string;
  description: string;
  children: Term[];
  parent: Term;
  slug: string;
  aspect_ratio: string;
  published: boolean;
}
