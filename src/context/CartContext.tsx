import { createContext, useContext, useEffect, useState } from "react";
import { string } from "yup";
import { Api2 } from "../components/services/api";
import { NotifyError, NotifySucess } from "../components/ToastiFy/Toastify";
import { UserContext } from "./UserContext";

interface ICartContextProps {
  children: React.ReactNode;
}

interface ICartContext {
  handleClick: (id: number) => void;
  removeFromList: (id: number) => void;
  removeAll: () => void;
  products: IProductsState[];
  currentSale: IProductsState[];
  geToken: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export interface IProductsState {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartContextProps) => {
  const [currentSale, setCurrentSale] = useState<IProductsState[]>([]);
  const [products, setProducts] = useState([] as IProductsState[]);
  const [geToken, setToken] = useState("");
  const token = localStorage.token;

  useEffect(() => {
    const getBurguers = async () => {
      try {
        const response = await Api2.get("products", {
          headers: {
            authorization: `Bearer ${geToken}`,
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
  }, [geToken]);

  const handleClick = (id: number) => {
    const copyFindProduct = [...currentSale];

    const findProduct: any = products.find((product) => {
      return product.id == id;
    });
    const verify = currentSale.find((product) => product.id == id);

    if (!verify) {
      copyFindProduct.push(findProduct);
      NotifySucess(`${findProduct.name} Adicionado ao carrinho!`);
      setCurrentSale([...copyFindProduct]);
    } else {
      NotifyError(`${findProduct.name} já existe no carrinho!`);
    }
  };

  const removeFromList = (id: number) => {
    const listRemoved = currentSale.filter((element) => element.id != id);

    const productName: any = currentSale.find((product) => product.id == id);
    NotifySucess(`${productName.name} Removido do carrinho com sucesso`);

    setCurrentSale(listRemoved);
  };

  const removeAll = () => {
    NotifySucess("Todos os itens foram removidos do carrinho!");
    setCurrentSale([]);
  };
  return (
    <CartContext.Provider
      value={{
        products,
        handleClick,
        currentSale,
        removeFromList,
        removeAll,
        geToken,
        setToken,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
