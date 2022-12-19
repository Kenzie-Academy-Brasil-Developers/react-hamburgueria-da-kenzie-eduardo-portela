import React, { useContext, useEffect } from "react";
import {
  CartContext,
  CartProvider,
  IProductsState,
} from "../../context/CartContext";
import { CartProduct } from "../CartProduct/CartProduct";
import { TotalCart } from "../TotalCart";
import { CartList, DivCart, EmpytLi } from "./style";

// export interface IProducts {
//   map(arg0: (product: IProducts) => JSX.Element): unknown;
//   category: string;
//   id: number;
//   img: string | undefined;
//   name: string;
//   price: number;
//   length: number;
// }

interface ICartProps {
  removeFromList: (id: number) => void;
  removeAll: () => void;
}

export const Cart = ({ removeFromList, removeAll }: ICartProps) => {
  const { currentSale } = useContext(CartContext);
  return (
    <>
      <DivCart className="container">
        <p className="titleCart">Carrinho de compras</p>

        <CartList>
          {currentSale.length > 0 ? (
            <>
              <CartProduct removeFromList={removeFromList} />
            </>
          ) : (
            <EmpytLi>
              <div>
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
              </div>
            </EmpytLi>
          )}
        </CartList>

        {currentSale ? (
          <TotalCart currentSale={currentSale} removeAll={removeAll} />
        ) : (
          ""
        )}
      </DivCart>
    </>
  );
};
