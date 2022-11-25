import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Headers } from "./style";

export const Header = ({ showProducts }) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    showProducts(textInput);
  };

  return (
    <Headers>
      <div className="container">
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            handleInput={(event) => setTextInput(event.target.value)}
            placeholder="Digitar pesquisa"
          >
            <Button type={"submit"} text="Pesquisar"></Button>
          </Input>
        </form>
      </div>
    </Headers>
  );
};
