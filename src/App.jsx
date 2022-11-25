import { useState, useEffect } from "react";
import "./App.css";
import GlobalStyles from "./styles/global";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart/Cart";
import { Api } from "./components/services/api";
import { ToastContainer } from "react-toastify";
import { NotifyError, NotifySucess } from "./components/ToastiFy/Toastify";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProdutcts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    const getBurguers = async () => {
      try {
        const response = await Api.get("products");
        setProducts(
          response.data.map((element) => (element.id ? element : ""))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getBurguers();
  }, []);

  const showProducts = (inputText) => {
    const filteredProd = products.filter((product) => {
      return product.name.toLowerCase().includes(inputText.toLowerCase());
    });

    setFilteredProducts(filteredProd);
  };

  const handleClick = (id) => {
    const copyFindProduct = [...currentSale];

    const findProduct = products.find((product) => {
      return product.id == id;
    });

    const verify = currentSale.find((product) => product.id == id);

    if (!verify) {
      copyFindProduct.push(findProduct);
      NotifySucess(`${findProduct.name} Adicionado ao carrinho!`);
    } else {
      NotifyError(`${findProduct.name} já existe no carrinho!`);
    }

    setCurrentSale([...copyFindProduct]);
  };

  const removeFromList = (id) => {
    const listRemoved = currentSale.filter((element) => element.id != id);

    const productName = currentSale.find((product) => product.id == id);
    NotifySucess(`${productName.name} Removido do carrinho com sucesso`);

    setCurrentSale(listRemoved);
  };

  const removeAll = () => {
    NotifySucess("Todos os itens foram removidos do carrinho!");
    setCurrentSale([]);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Header showProducts={showProducts} />
      <div className="media container">
        <ProductList
          handleClick={handleClick}
          setCurrentSale={setCurrentSale}
          products={filteredProdutcts.length > 0 ? filteredProdutcts : products}
        />
        <Cart
          currentSale={currentSale}
          removeFromList={removeFromList}
          removeAll={removeAll}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
