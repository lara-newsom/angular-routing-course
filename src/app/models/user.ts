export interface User {
  id: string;
  name: string;
  permissions: Permission[];
  cart: Record<string, { quantity: number }>;
}

const ADMIN = 'admin';
const CUSTOMER = 'customer';
const DEVELOPER = 'developer';

const PERMISSIONS = [
  ADMIN,
  CUSTOMER,
  DEVELOPER
] as const;

export type Permission = (typeof PERMISSIONS)[number];
