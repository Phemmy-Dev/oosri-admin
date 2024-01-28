import AuthLayout from "@/components/layouts/AuthLayout/auth-layout";
import { LoginWrapper } from "./login.styles";
import { FlexibleDiv } from "@/components/lib/Box/styles";
import TextField from "@/components/lib/TextField";

export default function LoginPage(){
    return (
      <AuthLayout>
        <LoginWrapper>
            <h1>Create an Admin Account</h1>
            <p>Hello</p>
            {/* <FlexibleDiv flexDir="column" className="form__outer__wrapper">
                <label>Full Name</label>
                <TextField />
            </FlexibleDiv> */}
        </LoginWrapper>
      </AuthLayout>
    );
}