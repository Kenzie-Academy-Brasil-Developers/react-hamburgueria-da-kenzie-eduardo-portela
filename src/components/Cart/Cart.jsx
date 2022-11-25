import React from "react";
import { CartProduct } from "../CartProduct/CartProduct";
import { TotalCart } from "../TotalCart";
import { CartList, DivCart, EmpytLi } from "./style";

export const Cart = ({ currentSale, removeFromList, removeAll }) => {
  return (
    <>
      <DivCart className="container">
        <p className="titleCart">Carrinho de compras</p>

        <CartList>
          {currentSale.length > 0 ? (
            <>
              <CartProduct
                currentSale={currentSale}
                removeFromList={removeFromList}
              />
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
        {currentSale.length > 0 ? (
          <TotalCart currentSale={currentSale} removeAll={removeAll} />
        ) : (
          ""
        )}
      </DivCart>
    </>
  );
};
