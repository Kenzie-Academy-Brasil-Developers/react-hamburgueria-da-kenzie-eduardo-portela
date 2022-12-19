import { AxiosError } from "axios";
import { userInfo } from "os";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api2 } from "../components/services/api";
import { NotifyError, NotifySucess } from "../components/ToastiFy/Toastify";
import { IProductsState } from "./CartContext";

export interface IDataLogin {
  email: string;
  password: string;
}

interface IUserProps {
  id: string;
  name: string;
  email: string;
}

interface IUserInfo {
  accessToken: string;
  user: IUserProps;
}

interface IUserProviderChildren {
  children: React.ReactNode;
}

interface IUserContext {
  UserInfo: IUserInfo | null;
  // loginRequest: (data: IDataLogin) => void;
  registerRequest: (data: IDataRegister) => void;
  loading: boolean;
  logout: () => void;
}

//register Interface

interface IDataRegister {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface IAxiosError {
  error: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderChildren) => {
  const [UserInfo, setUserInfo] = useState<IUserInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerRequest = async (data: IDataRegister) => {
    try {
      const response = await Api2.post("users", data);
      if (response.status == 201) {
        NotifySucess("Cadastro realizado com sucesso");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      const currentError = error as AxiosError<IAxiosError>;
      NotifyError(`${currentError.response?.data}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("IdUser");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        UserInfo,
        // loginRequest,
        registerRequest,
        loading,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
