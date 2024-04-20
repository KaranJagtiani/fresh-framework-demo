import { FreshContext } from "$fresh/server.ts";

const products = [
  { name: 'Apple MacBook Pro 17"', category: 'Laptop', price: '$2999' },
  { name: 'Microsoft Surface Pro', category: 'Laptop PC', price: '$1999' },
  { name: 'Magic Mouse 2', category: 'Accessories', price: '$99' },
  { name: 'iPhone 13 Pro Max', category: 'Smartphone', price: '$1099' },
  { name: 'Samsung Galaxy S21', category: 'Smartphone', price: '$999' },
  { name: 'Apple Watch Series 7', category: 'Wearable', price: '$399' },
  { name: 'Logitech MX Master 3', category: 'Accessories', price: '$99' },
  { name: 'HP Envy 13t', category: 'Laptop', price: '$899' },
];

export const handler = async (_req: Request, _ctx: FreshContext): Promise<Response> => {
  // Wait for 5 seconds before proceeding
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Convert products array to a JSON string for the response
  const body = JSON.stringify(products);

  // Return a new Response object with appropriate headers for JSON content
  return new Response(body, {
    headers: { 'Content-Type': 'application/json' }
  });
};