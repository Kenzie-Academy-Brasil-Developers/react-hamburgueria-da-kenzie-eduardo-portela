import React from "react";
import { CartProvider, IProductsState } from "../../context/CartContext";
import { ProductCard } from "../ProductCard";
import { DivUl } from "./style";

interface IProductList {
  products: IProductsState[];
}

export const ProductList = ({ products }: IProductList) => {
  return (
    <DivUl>
      <ul className="container">
        <ProductCard products={products} />
      </ul>
    </DivUl>
  );
};
