import { distDir } from "@/next.config";
import products from "@/public/data/products";

export async function GET(req) {
  console.log("----------------GET");
  return new Response(JSON.stringify(products));
}

export async function POST(req) {
  const data = await req.json();
  products.push(data);
  return new Response(JSON.stringify(data));
}
