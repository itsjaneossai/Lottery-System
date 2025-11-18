import { ReactNode } from "react";

interface IEmailVerification {
  children: ReactNode;
}
const EmailVerification = ({children}:IEmailVerification) => {
    //get user details from appcontext;
    //check if email is verified;
    // if not route to email verifiaction page//

  return <>{children}</>;
};

export default EmailVerification;
