export interface IPackageModel {
  _id: string;
  imagePath: string;
  name: string;
  details: string[];
  tags: string[];
  amount: number;
  currency: string;
  moreInformation: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
