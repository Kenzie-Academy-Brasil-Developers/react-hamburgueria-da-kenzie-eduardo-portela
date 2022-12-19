import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { CenterDiv, DivRegister, Link } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../components/Form/Schemas/registerSchema";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { UserContext } from "../../context/UserContext";

export const Register = () => {
  const { registerRequest } = useContext(UserContext);

  type FormValues = {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <CenterDiv>
      <DivRegister className="container">
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
        <Form callback={handleSubmit(registerRequest)}>
          <div className="headerFormRegister">
            <h3>Cadastro</h3>
            <Link to={"/"}> Retonar para o login</Link>
          </div>
          <div className="label-float">
            {/* <label htmlFor="email">email</label> */}

            <Input
              type={"text"}
              placeholder={"Nome"}
              register={register("name")}
            />
            {errors.name?.message && <p>{errors.name.message}</p>}

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
          <Input
            type={"password"}
            placeholder={"Confirme a Senha"}
            register={register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword.message}</p>
          )}

          <Button type={"submit"} text={"Cadastrar"} />
        </Form>
      </DivRegister>
    </CenterDiv>
  );
};
