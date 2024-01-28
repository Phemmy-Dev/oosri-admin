import { FlexibleDiv } from "@/components/lib/Box/styles";
import { AuthLayoutWrapper } from "./auth-layout.styles";

export default function AuthLayout({children}){
    return (
      <AuthLayoutWrapper>
        <FlexibleDiv className="left__section" flexDir="column">
          <FlexibleDiv className="content__wrapper">
            <h1>Elevate Your E-commerce Experience</h1>
            <p>Register as an admin to access exclusive tools and insights</p>
          </FlexibleDiv>
        </FlexibleDiv>
        <FlexibleDiv className="right__section">{children}</FlexibleDiv>
      </AuthLayoutWrapper>
    );
}