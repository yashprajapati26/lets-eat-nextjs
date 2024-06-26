import { NextResponse } from "next/server";
import { dbConnect } from "../../src/lib/dbConn";

export async function GET() {
  const conn = await dbConnect();
  return new NextResponse("connected to db");
}
