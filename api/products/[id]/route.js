import products from "@/public/data/products";

export async function GET(req) {
  const abc = req.nextUrl.pathname.split("/");
  const id = abc[abc.length - 1];
  const product = products.find((obj) => obj.id === Number(id));
  return new Response(JSON.stringify(product));
}
