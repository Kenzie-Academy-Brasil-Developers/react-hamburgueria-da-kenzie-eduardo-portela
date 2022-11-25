import styled from "styled-components";

export const DivTotalCart = styled.div`
  background-color: var(--color-grey-400);
  padding: 16px;
  max-width: 577px;

  div {
    display: flex;
    justify-content: space-between;
  }

  div > p {
    font-weight: 600;
  }

  div > span {
    color: var(--color-grey-200);
  }

  button {
    background-color: var(--color-grey-300);
    width: 100%;
    height: 50px;
    margin-top: 8px;
  }
`;
