import { Container } from "./style";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const ContactList = () => {
  return (
    <>
      <Container>
        <h2>Contacts</h2>
        <ul>
          <li>
            <a href="mailto:d.a.s2000silva14@gmail.com" target="_blank" rel="noreferrer">
              <MdMail />
              Gmail
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/derick-almeida/" target="_blank" rel="noreferrer">
              <BsLinkedin />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/Derick-Almeida" target="_blank" rel="noreferrer">
              <BsGithub />
              Github
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default ContactList;
