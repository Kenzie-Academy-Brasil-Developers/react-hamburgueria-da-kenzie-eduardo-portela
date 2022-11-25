import React from "react";
import { Button } from "../Button";
import { CartLi } from "./style";

export const CartProduct = ({ currentSale, removeFromList }) => {
  return (
    <>
      {currentSale.length > 0
        ? currentSale.map((product) => (
            <CartLi key={product.id}>
              <div>
                <img src={product.img} alt="" />
                <div>
                  <h4>{product.name}</h4>
                  <cite>{product.category}</cite>
                </div>
              </div>
              <Button
                callback={() => removeFromList(product.id)}
                text="Remover"
              />
            </CartLi>
          ))
        : ""}
    </>
  );
};
