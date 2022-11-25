import React from "react";
import { ProductCard } from "../ProductCard";
import { DivUl } from "./style";

export const ProductList = ({ products, handleClick, setCurrentSale }) => {
  return (
    <DivUl>
      <ul className="container">
        <ProductCard
          handleClick={handleClick}
          products={products}
          setCurrentSale={setCurrentSale}
        />
      </ul>
    </DivUl>
  );
};
