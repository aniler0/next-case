import fsPromises from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { IPackageModel } from "types/IPackageModel";

const packagesFilePath = path.join(process.cwd(), "public/mocks/packages.json");
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await fsPromises.readFile(packagesFilePath, "utf-8");
  const jsonData = JSON.parse(data);
  const selectedPackage = jsonData.allPackages.find(
    (packageItem: IPackageModel) => packageItem._id === params.id
  );
  return NextResponse.json(selectedPackage);
}
