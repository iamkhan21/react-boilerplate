import styled from "styled-components";
import { WrapContainer } from "../../shared/Wraps";

export const Navigation = styled(WrapContainer)`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e8e8e8;

  .brand-logo {
    font-size: 32px;
    font-weight: 900;
    line-height: 36px;
    margin-right: 150px;
  }

  .nav-item {
    margin-left: 20px;
    &.active {
      font-weight: 900;
    }
  }
`;
