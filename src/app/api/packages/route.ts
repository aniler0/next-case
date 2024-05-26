import fsPromises from "fs/promises";
import path from "path";

const packagesFilePath = path.join(process.cwd(), "public/mocks/packages.json");

export async function GET() {
  const data = await fsPromises.readFile(packagesFilePath, "utf-8");
  const jsonData = JSON.parse(data);
  return Response.json(jsonData);
}
