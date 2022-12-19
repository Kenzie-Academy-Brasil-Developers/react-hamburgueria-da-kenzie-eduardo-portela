import { userInfo } from "os";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Cart } from "../../components/Cart/Cart";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { Api2 } from "../../components/services/api";
import { AuthLogin } from "../../context/AuthLogin";
import {
  CartContext,
  CartProvider,
  IProductsState,
} from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  const { user, loading } = useContext(AuthLogin);

  const [products, setProducts] = useState([] as IProductsState[]);

  const [filteredProdutcts, setFilteredProducts] = useState(
    [] as IProductsState[]
  );

  const token = localStorage.token;

  const { removeAll, removeFromList, geToken, setToken } =
    useContext(CartContext);

  useEffect(() => {
    setToken(token);
    const getBurguers = async () => {
      try {
        const response = await Api2.get("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(
          response.data.map((element: IProductsState) =>
            element.id ? element : ""
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getBurguers();
  }, []);

  const showProducts = (inputText: string) => {
    const filteredProd = products.filter((product) => {
      return product.name.toLowerCase().includes(inputText.toLowerCase());
    });

    setFilteredProducts(filteredProd);
  };
  if (loading) {
    return <h1>carregando...</h1>;
  } else if (user) {
    return (
      <>
        <Header showProducts={showProducts} />

        <div className="media container">
          <ProductList
            products={
              filteredProdutcts.length > 0 ? filteredProdutcts : products
            }
          />

          <Cart removeFromList={removeFromList} removeAll={removeAll} />
        </div>
      </>
    );
  } else {
    <Navigate to={"/"} />;
  }
};
