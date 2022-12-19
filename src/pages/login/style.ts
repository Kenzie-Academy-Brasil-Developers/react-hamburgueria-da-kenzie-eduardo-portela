import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const DivLogin = styled.div`
  .logo {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }

  .logo h1 {
    font-size: var(--text-1);
  }

  .logo span {
    font-size: var(--text-3);
    color: var(--brand-3);
  }

  .intro {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: 1px solid var(--color-grey-300);
    margin: 16px 0;
  }

  .intro div {
    background-color: #e9f7ef;
    padding: 14px;
    border-radius: 4px;
    color: var(--brand-1);
  }

  .intro p {
    font-size: var(--text-4);
    color: var(--color-grey-200);
  }

  .aside {
    color: var(--color-grey-200);
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 940px;
  }
`;

export const CenterDiv = styled.div`
  @media (min-width: 800px) {
    & {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Link = styled(LinkRouter)`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-grey-100);
  border-radius: 4px;
  color: var(--color-grey-200);
  width: 100%;
  background-color: var(--color-grey-300);
  height: 48px;
  text-decoration: none;
  margin: 16px 0;
`;
