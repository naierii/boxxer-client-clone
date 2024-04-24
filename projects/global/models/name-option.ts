import { Term } from './term';
export interface NameOption {
  _id: string;
  title: string;
  price: number;
  weight: number;
  nameId: string;
  type: string;
  limit: number;
  category: Term;
  published: boolean;
}
