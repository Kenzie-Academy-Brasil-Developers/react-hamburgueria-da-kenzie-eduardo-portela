import { useState, useEffect } from "react";
import "./App.css";
import GlobalStyles from "./styles/global";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import { NotifyError, NotifySucess } from "./components/ToastiFy/Toastify";
import { RoutesMain as Routes } from "./Routes";
import { AuthLoginProvider } from "./context/AuthLogin";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <AuthLoginProvider>
        <Routes />
      </AuthLoginProvider>
      <GlobalStyles />
      <ToastContainer />
    </div>
  );
}

export default App;
