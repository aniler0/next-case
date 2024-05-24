import { IPackageModel } from "types/IPackageModel";

export type IPackagesInitialState = {
  packages: IPackageModel[];
  selectedPackage: IPackageModel | null;
  isLoading: boolean;
  error: any;
};

export type ICartInitialState = {
  cart: IPackageModel[];
};
export type IPaymentInitialState = {
  isLoading: boolean;
  error: any;
  contractText: string;
};
