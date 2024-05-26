import { IUserModel } from "types/IUserModel";

export interface LoginResponseModel {
  message: string;
  token: string;
  user: IUserModel;
}
