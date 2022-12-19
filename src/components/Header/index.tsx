import React, { useContext, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Headers } from "./style";
import { CiLogout } from "react-icons/ci";
import { UserContext } from "../../context/UserContext";

interface IHeaderProps {
  showProducts: (inputText: string) => void;
}

export const Header = ({ showProducts }: IHeaderProps) => {
  const [textInput, setTextInput] = useState("");
  const { logout } = useContext(UserContext);

  const handleSubmit = (event: any) => {
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
            handleInput={(event: any) => setTextInput(event.target.value)}
            placeholder="Digitar pesquisa"
          >
            <Button type={"submit"} text="Pesquisar"></Button>
          </Input>
          <button onClick={logout} className="logout">
            <CiLogout />
          </button>
        </form>
      </div>
    </Headers>
  );
};
