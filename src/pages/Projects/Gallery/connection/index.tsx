import { api } from "../../../../service/api";

interface IProjectData {
  id: string;
  name: string;
  image: string;
  description: string;
  repository: string;
  application: string;
}

const connect = (setToken: (e: string) => void) => {
  const loginData = {
    email: "d.a.s2000silva14@gmail.com",
    password: "32755428",
  };

  api
    .post("/login", loginData)
    .then((res) => {
      console.log("oi ?");

      setToken(res.data.token);
    })
    .catch((err) => console.error(err));
  return;
};

const getProjects = (
  setFrontEnd: (e: IProjectData[]) => void,
  setBackEnd: (e: IProjectData[]) => void,
  setLoading: (e: boolean) => void,
  token: string
) => {
  console.log(token);

  api
    .get("/projects?type=frontEnd", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      console.log("foi");

      setFrontEnd(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(true);
      console.error(err);
    });

  api
    .get("/projects?type=backEnd", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      setBackEnd(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(true);
      console.error(err);
    });

  return;
};

export { connect, getProjects };
