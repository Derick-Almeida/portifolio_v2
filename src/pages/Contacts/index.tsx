import DevName from "../../components/DevName";
import Navegation from "../../components/Navegation";
import TitilePage from "../../components/TitlePage";

import { ContainerPages } from "../../styles/GlobalStyle";
import ContactList from "./ContactList";
import Form from "./Form";
import { Container } from "./style";

const Contacts = () => {
  return (
    <ContainerPages className="contacts">
      <TitilePage title="contacts" fontSize="calc(3vw + 3vh + 3vmin)" />
      <Container>
        <Form />
        <ContactList />
      </Container>
      <Navegation currentPage="contacts" />
      <DevName />
    </ContainerPages>
  );
};

export default Contacts;
