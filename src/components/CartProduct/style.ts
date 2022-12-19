import styled from "styled-components";

export const CartLi = styled.li`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    background-color: var(--color-grey-300);
    border-radius: 8px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  cite {
    font-size: var(--text-4);
    color: var(--color-grey-200);
  }

  & > div:nth-child(2) {
  }

  & > button {
    background-color: transparent;
    height: max-content;
    color: var(--color-grey-200);
    font-weight: 600;
  }

  @media (min-width: 910px) {
    width: 390px;
  }
`;
