import data from "../../../../public/data";

export async function GET(req) {
  console.log("----------------GET", JSON.stringify(data));
  return new Response(JSON.stringify(data));
}

export async function POST(req) {
  const data = await req.json();
  products.push(data);
  return new Response(JSON.stringify(data));
}
