import styled from "styled-components";

export const Headers = styled.header`
  width: 100%;
  background-color: var(--color-grey-400);
  height: 139px;

  div {
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: var(--text-1);
  }

  span {
    font-size: var(--text-3);
    color: var(--brand-3);
  }

  @media (min-width: 910px) {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    h1 {
      padding-left: 8px;
    }
  }
`;
