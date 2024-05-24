import PackageDetail from "components/PackageDetail/PackageDetail";
import { IPackageModel } from "types/IPackageModel";

type PackageDetailProps = {
  params: {
    packageId: string;
  };
};

export async function generateStaticParams() {
  try {
    const packages = await fetch(
      "https://caseapi-fe.paramtech.com.tr/api/packages"
    );
    const data = await packages.json();
    return data.map((post: IPackageModel) => ({
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
      `https://caseapi-fe.paramtech.com.tr/api/packages/${packageId}`
    );
    const data = await response.json();
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
