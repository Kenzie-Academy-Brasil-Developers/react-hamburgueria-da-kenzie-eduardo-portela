import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid var(--color-grey-300);

  p {
    color: red;
    font-size: var(--text-4);
  }

  label {
    color: var(--color-grey-200);
    font-size: var(--text-4);
  }

  input {
    height: 38px;
    border-radius: 4px;
    border: 2px solid black;
    padding-left: 16px;
    color: black;
    margin-bottom: 8px;
    position: relative;
    border: 1.5px solid black;
  }

  input:focus {
    outline: black;
    ::placeholder {
      font-size: 10px;
      position: absolute;
      background-color: white;
      bottom: 20px;
      transition: 0.1s ease-in;
    }
  }

  button {
    margin-top: 16px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid var(--color-grey-0);
    background-color: var(--brand-1);
    color: #fff;
  }

  @media (min-width: 800px) {
    label {
      font-size: var(--text-4);
    }
  }
`;
