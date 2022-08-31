import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Container } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const schema = yup.object().shape({
    name: yup.string().min(3, "Minimum of 3 characters").required("Name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().min(2, "Minimum of 3 characters").required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  const submitEmail = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (name !== "" && email !== "" && message !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, message]);

  return (
    <Container>
      <h2>Leave a message</h2>
      <form onSubmit={handleSubmit(submitEmail)}>
        <input
          type="text"
          placeholder="exemple name"
          {...register("name")}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name.message as string}</span>}

        <input
          type="email"
          placeholder="exemple@email.com"
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email.message as string}</span>}

        <textarea
          cols={30}
          rows={5}
          placeholder="message"
          {...register("message")}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <span>{errors.message.message as string}</span>}

        <Button type="submit" disabled={disabled}>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Form;
