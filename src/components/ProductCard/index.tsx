import React, { useContext } from "react";
import { CartContext, IProductsState } from "../../context/CartContext";
import { Button } from "../Button";
import { CardLi } from "./style";

interface IProductCardProps {
  products: IProductsState[];
}

export const ProductCard = ({ products }: IProductCardProps) => {
  const { handleClick } = useContext(CartContext);

  return (
    <>
      {products.map(({ id, img, name, category, price }: IProductsState) => (
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
