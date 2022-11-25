import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@media (min-width: 910px) {
  .media {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
}



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
    border-radius: 8px;
}

.container{
    padding: .6rem;
    max-width: 1440px;

}

:root{
    --brand-1: #27AE60;
    --brand-2: #93D7AF;
    --brand-3: #EB5757;

    --color-error:#E60000;
    --color-warning:#FFCD07;
    --color-sucess:#168821;

    --white: #ffffff
    --color-black: #000


    --color-grey-100: #828282;
    --color-grey-200: #aaa;
    --color-grey-300: #E0E0E0;
    --color-grey-400: #F5F5F5;

    --text-1: 26px;
    --text-2: 22px;
    --text-3: 18px;
    --text-3: 14px;
    --text-4: 12px;
}

`;

export default GlobalStyles;
