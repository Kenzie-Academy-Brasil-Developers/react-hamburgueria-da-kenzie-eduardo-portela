import React from "react";
import { Button } from "../Button";
import { CardLi } from "./style";

export const ProductCard = ({ products, handleClick }) => {
  return (
    <>
      {products.map(({ id, img, name, category, price }) => (
        <CardLi key={id}>
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <cite>{category}</cite>
            <p>R$ {price.toFixed(2)}</p>
            <Button callback={() => handleClick(id)} text="Adicionar" />
          </div>
        </CardLi>
      ))}
    </>
  );
};
