import PackageDetail from "components/PackageDetail/PackageDetail";
import { IPackageModel } from "types/IPackageModel";
import { PackagesResponseModel } from "types/http/response/PackagesResponseModel";

type PackageDetailProps = {
  params: {
    packageId: string;
  };
};

export async function generateStaticParams() {
  try {
    const packages = await fetch(process.env.API_URL + "/api/packages/");

    const data: PackagesResponseModel = await packages.json();
    return data.allPackages.map((post: IPackageModel) => ({
      packageId: post._id,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

const fetchPackage = async (packageId: string): Promise<IPackageModel> => {
  try {
    const response = await fetch(
      process.env.API_URL + "/api/packages/" + packageId
    );
    const data: IPackageModel = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {} as IPackageModel;
  }
};

export default async function PackageDetailPage({
  params,
}: PackageDetailProps) {
  const { packageId } = params;
  const packageDetail = await fetchPackage(packageId);

  return <PackageDetail packageItem={packageDetail} />;
}
