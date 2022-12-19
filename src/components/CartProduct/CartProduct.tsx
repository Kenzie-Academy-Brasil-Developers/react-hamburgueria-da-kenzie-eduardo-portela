import React, { useContext } from "react";
import { CartContext, IProductsState } from "../../context/CartContext";
import { Button } from "../Button";
import { CartLi } from "./style";

interface ICartProductProps {
  removeFromList: (id: number) => void;
  //map?: IProducts;
}

export const CartProduct = ({ removeFromList }: ICartProductProps) => {
  const { currentSale } = useContext(CartContext);

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
