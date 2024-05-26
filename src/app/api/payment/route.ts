import fsPromises from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

const contract = path.join(process.cwd(), "public/mocks/contract.html");

export async function GET() {
  const data = await fsPromises.readFile(contract, "utf-8");
  return NextResponse.json(data);
}
