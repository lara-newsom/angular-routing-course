import { Category, Pie } from './pie';

export const createPie = (partial: Partial<Pie>) => (    {
  id: '1',
  category: Category.CHEESECAKE,
  image: 'pie-image.png',
  thumb: 'pie-thumb.png',
  title: 'Test Pie',
  ingredients: [
    'cream cheese'
  ],
  price: 148.95,
  description: 'Describe that pie!',
  ...partial
});
