import styled from "styled-components";

export const CardLi = styled.li`
  min-width: 280px;
  border: 2px solid var(--color-grey-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-300);
  height: 360px;
  border-radius: 4px;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 40%;
  }

  div {
    padding: 16px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div > h3 {
    font-size: var(--text-3);
  }

  div > cite {
    color: var(--color-grey-200);
  }

  div > p {
    color: var(--brand-1);
    font-size: var(--text-4);
    font-weight: 600;
  }

  button {
    width: 107px;
    background-color: var(--brand-1);
    height: 40px;
    color: #fff;
  }
`;
