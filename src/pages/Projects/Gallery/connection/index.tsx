import { privateRoute, publicRoute } from "../../../../service/api";

interface IProjectData {
  id: string;
  name: string;
  image: string;
  description: string;
  repository: string;
  application: string;
}

const connection = async (
  setFrontEnd: (e: IProjectData[]) => void,
  setBackEnd: (e: IProjectData[]) => void
) => {
  const loginData = {
    email: "d.a.s2000silva14@gmail.com",
    password: "32755428",
  };

  publicRoute
    .post("/login", loginData)
    .then((res) => {
      localStorage.setItem("@Portifolio:token", JSON.stringify(res.data.token));
    })
    .catch((err) => console.error(err));

  setTimeout(() => {
    privateRoute
      .get("/projects?type=frontEnd")
      .then((res) => {
        setFrontEnd(res.data.data);
      })
      .catch((err) => console.error(err));

    privateRoute
      .get("/projects?type=backEnd")
      .then((res) => {
        setBackEnd(res.data.data);
      })
      .catch((err) => console.error(err));
  }, 1000);
  return;
};

export default connection;
