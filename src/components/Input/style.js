import styled from "styled-components";

export const DivInput = styled.div`
  width: 100%;
  padding-top: 16px;
  position: relative;
  max-width: 550px;
  margin: 0 auto;

  input {
    height: 60px;
    width: 100%;
    max-width: 550px;
    border-radius: 8px;
    border: none;
    padding-left: 32px;
    outline-color: var(--brand-1);
  }

  button {
    width: 107px;
    background-color: var(--brand-1);
    height: 40px;
    color: #fff;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  @media (min-width: 910px) {
    margin: 0;
    width: 425px;
    margin-right: 7px;
  }
`;
