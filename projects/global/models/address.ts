import { User } from './user';
export interface Address {
  _id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  region: string;
  country: string;
  country_code: string;
  postcode: string;
  email: string;
  phone: string;
  type: string;
  owner: User;
  default: boolean;
  billing: boolean;
}
