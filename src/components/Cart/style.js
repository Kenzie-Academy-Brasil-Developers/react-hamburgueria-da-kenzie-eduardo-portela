import styled from "styled-components";

export const CartList = styled.ul`
  min-height: 180px;
  max-height: 450px;
  overflow-y: scroll;
  max-width: 577px;

  background-color: var(--color-grey-400);
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--color-grey-200);
`;

export const EmpytLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 180px;

  p {
    text-align: center;
    margin-top: 16px;
  }
`;

export const DivCart = styled.div`
  .titleCart {
    max-width: 577px;
    padding-left: 16px;
    background-color: var(--brand-1);
    height: 50px;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    color: #fff;
  }

  @media (min-width: 910px) {
    min-width: 430px;
    margin: 0;

    .titleCart {
      max-width: 577px;
      padding-left: 16px;
      background-color: var(--brand-1);
      height: 50px;
      border-radius: 4px 4px 0 0;
      display: flex;
      align-items: center;
      color: #fff;
    }
  }
`;
