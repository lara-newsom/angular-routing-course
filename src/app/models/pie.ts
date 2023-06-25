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

export enum Category {
  FRUIT_PIE = 'Fruit Pies',
  SEASONAL_PIE = 'Seasonal Pies',
  CHEESECAKE = 'Cheesecakes',
  ALL = 'All Pies'
}
