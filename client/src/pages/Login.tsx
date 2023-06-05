import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { formData } from "../types/types";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../network/api";
import { loginInput } from "../types/types";
import { Flex,Center,Heading } from "@chakra-ui/react";


function Login({ setAuthorized }: loginInput) {
  const [error, setErr] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log("Data= ", data);
    const response = await fetchLogin(data, setErr);
    if (response.token) {
      localStorage.setItem("token", response.token);
      setAuthorized(true);
      navigate("/home");
    }
  };

  return (
    <Flex direction={'column'} w={'30%'}p={'30px'} ml={'500'} 
    boxShadow='2xl'
    rounded={'xl'}
    mt={'100'} border={'1px gray'}>
      <Center>
      <Heading as={"h1"}>Login</Heading>
      </Center>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="txt-field">
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[a-z0-9_.]+$/,
                message:
                  "Your username can contain only letters, numbers and _",
              },
            })}
          />
          <span></span>
          <label>Username </label>
        </div>
        <p>{errors.username?.message}</p>
        <div className="txt-field">
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be less than 4 characters",
              },
              maxLength: {
                value: 10,
                message: "Password must not be more than 10 chars",
              },
            })}
          />
          <span></span>
          <label>Password</label>
        </div>

        <input type="submit" value="Login" />
        <div className="signup-link">
          {" "}
          Not a member?{" "}
          <div onClick={() => navigate("/register")}>Register</div>
        </div>
      </form>
   </Flex>
  );
}

export default Login;
