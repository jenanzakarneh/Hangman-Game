import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useForm } from "react-hook-form";
import { formData } from "../types/types";
import { fetchRegister } from "../network/api";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const [err, setErr] = useState<string>();
  const navigate = useNavigate();

  const onSubmit = async (data: formData) => {
    console.log("data = ", data);
    const response = await fetchRegister(data, setErr);
    if (response.created) navigate("/login");
  };

  return (
    <Flex direction={'column'} w={'30%'}p={'30px'} ml={'500'} 
    boxShadow='2xl'
    rounded={'xl'}
    mt={'100'} border={'1px gray'}>
      <Center>
      <Heading as={"h1"}>Rgister</Heading>
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
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "This is not a valid email",
              },
            })}
          />
          <span></span>
          <label>Email</label>
        </div>
        <p>{errors.email?.message}</p>
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
        <p>{errors.password?.message}</p>
        <input type="submit" value="Register" />
        <div className="signup-link">
          {" "}
          Already have account?{" "}
          <div onClick={() => navigate("/login")}>Login</div>
        </div>
      </form>
      <div className="error-mssg">{err}</div>
    </Flex>
  );
}

export default Register;
