export interface Pie {
  image: string;
  thumb: string;
  title: string;
  price: number;
  description: string;
  ingredients: string[];
  category: Category;
  id: string;
  quantity?: number;
}

export const FRUIT_PIE = 'Fruit Pies';
export const SEASONAL_PIE = 'Seasonal Pies';
export const CHEESECAKE = 'Cheesecakes';
export const ALL = 'All Pies';

export const CATEGORIES = [
  FRUIT_PIE,
  SEASONAL_PIE,
  CHEESECAKE,
  ALL
] as const;

export type Category = (typeof CATEGORIES)[number];
