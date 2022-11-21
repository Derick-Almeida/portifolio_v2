import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Container } from "./style";

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (name !== "" && email !== "" && message !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, message]);

  // const sendEmail = async () => {
  //   //enviar email
  // };

  return (
    <Container>
      <h2>Leave a message</h2>
      {/* <form onSubmit={sendEmail}> */}
      <form>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          required
          id="name"
          placeholder="exemple name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          required
          id="email"
          placeholder="exemple@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message*</label>
        <textarea
          cols={30}
          required
          id="message"
          rows={5}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* <Button type="submit" disabled={disabled}> */}
        <Button disabled={true}>Send</Button>
      </form>
    </Container>
  );
};

export default Form;
