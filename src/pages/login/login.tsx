import { CenterDiv, DivLogin } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../components/Form/Schemas/loginSchema";
import { Button } from "../../components/Button";
import { Link } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AuthLogin } from "../../context/AuthLogin";

export const Login = () => {
  const { loginRequest } = useContext(AuthLogin);

  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  return (
    <CenterDiv>
      <DivLogin className="container">
        <div className="logo">
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
          <div className="intro">
            <div>
              <FiShoppingBag />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os melhores
              ingredientes.
            </p>
          </div>
        </div>
        <Form callback={handleSubmit(loginRequest)}>
          <h3>Login</h3>
          <div className="label-float">
            {/* <label htmlFor="email">email</label> */}
            <Input
              type={"email"}
              placeholder={"Email"}
              register={register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          {/* <label htmlFor="password">password</label> */}
          <Input
            type={"password"}
            placeholder={"Senha"}
            register={register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
          <Button type={"submit"} text={"Logar"} />
          <aside>
            <p className="aside">
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </p>
            <Link to={"register"}> Cadastrar</Link>
          </aside>
        </Form>
      </DivLogin>
    </CenterDiv>
  );
};
