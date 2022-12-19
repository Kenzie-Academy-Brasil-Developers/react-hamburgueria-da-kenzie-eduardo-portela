import React, { useState } from "react";
import { IProductsState } from "../../context/CartContext";
import { Button } from "../Button";
import { DivTotalCart } from "./style";

interface ITotalCartProps {
  currentSale: IProductsState[];
  removeAll: () => void;
}

export const TotalCart = ({ currentSale, removeAll }: ITotalCartProps) => {
  const TotalSum = () => {
    const sum = currentSale.reduce((initial, current) => {
      return initial + current.price;
    }, 0);

    return sum.toFixed(2);
  };

  return (
    <DivTotalCart>
      <div>
        <p>Total</p>
        <span>R$ {TotalSum()}</span>
      </div>
      <Button callback={removeAll} text="Remover todos" />
    </DivTotalCart>
  );
};
