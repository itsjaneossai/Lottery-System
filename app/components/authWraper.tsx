import { ReactNode, useState } from "react";
import { readFromLocalStorage } from "../servicesAndHelpers/storage";

interface IAuthWrapper {
  children: ReactNode;
}
const AuthWraper = ({ children }: IAuthWrapper) => {
  if (!readFromLocalStorage()) {
    //route to login page
  }

  return <>{children}</>;
};

export default AuthWraper;
