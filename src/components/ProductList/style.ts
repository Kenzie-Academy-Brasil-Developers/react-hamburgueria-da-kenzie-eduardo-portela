import styled from "styled-components";

export const DivUl = styled.div`
  ul {
    display: flex;
    overflow-x: scroll;
    gap: 16px;
    height: max-content;
  }

  @media (min-width: 620px) {
    & > ul {
      width: 100%;
      max-width: 900px;
      flex-wrap: wrap;
      overflow-x: hidden;
      margin: 0 auto;
    }
  }
`;
