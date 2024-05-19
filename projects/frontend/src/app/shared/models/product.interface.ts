/* eslint-disable */

export type Product = {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating;
  qty:         number;
  subTotal:    number;
}

export interface Rating {
  rate:  number;
  count: number;
}