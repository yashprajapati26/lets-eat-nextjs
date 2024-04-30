import { data } from "../../../../../public/data";

export async function GET(req) {
  const abc = req.nextUrl.pathname.split("/");
  const id = abc[abc.length - 1];
  const product = data?.find((obj) => obj.id === Number(id));
  return new Response(JSON.stringify(product));
}
