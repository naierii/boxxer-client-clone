export interface Sizing {
  height: string;
  weight: number;
  unit: string;
}

export interface Profile {
  _id?: string;
  name: string;
  sizing: Sizing;
}
