import { IPackageModel } from "types/IPackageModel";

export const calculateCart = (data: IPackageModel[]) => {
  return data.reduce((acc, curr) => acc + curr.amount, 0);
};
export default calculateCart;
