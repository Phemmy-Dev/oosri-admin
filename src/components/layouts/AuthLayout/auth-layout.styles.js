import { FlexibleDiv } from "@/components/lib/Box/styles";
import styled from "styled-components";

export const AuthLayoutWrapper = styled(FlexibleDiv)`
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100dvh;

  .left__section {
    height: 100%;
    width: 50%;

    .content__wrapper {
        width: 60%;
        text-align: left;

        h1, p {
            text-align: left;
            width: 100%;
        }
    }
  }

  .right__section {
    height: 100%;
    width: 50%;
  }
`;