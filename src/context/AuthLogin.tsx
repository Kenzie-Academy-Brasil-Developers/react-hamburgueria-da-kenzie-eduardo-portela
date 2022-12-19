import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api2 } from "../components/services/api";
import { NotifyError, NotifySucess } from "../components/ToastiFy/Toastify";
import { IAxiosError, IDataLogin, UserContext } from "./UserContext";

interface IAuthLoginProp {
  children: React.ReactNode;
}

interface IAuthLoginContext {
  user: IUserInfo | null;
  loading: boolean;
  loginRequest: (data: IDataLogin) => void;
}

interface ILocalStorageInfo {
  token: string;
  IdUser: string;
}

interface IUserInfo {
  email: string;
  id: number;
  name: string;
  password: string;
}

export const AuthLogin = createContext({} as IAuthLoginContext);

export const AuthLoginProvider = ({ children }: IAuthLoginProp) => {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.token;
      const IdUser = localStorage.getItem("IdUser");

      if (!token) {
        setLoading(false);
        return navigate("/");
      }

      try {
        const { data } = await Api2.get(`users/${IdUser}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        const currentError = error as AxiosError<IAxiosError>;
        NotifyError(`${currentError.response?.data}`);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const loginRequest = async (data: IDataLogin) => {
    try {
      setLoading(true);
      const response = await Api2.post("login", data);
      const token = response.data.accessToken;
      const IdUser = response.data.user.id;

      if (response.status == 200) {
        JSON.stringify(localStorage.setItem("token", token));
        localStorage.setItem("IdUser", IdUser);

        setUser(response.data);
        NotifySucess("Login realizado com sucesso");
        navigate("dashboard");
      }
    } catch (error) {
      const currentError = error as AxiosError<IAxiosError>;
      NotifyError(`${currentError.response?.data}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLogin.Provider value={{ user, loading, loginRequest }}>
      {children}
    </AuthLogin.Provider>
  );
};
