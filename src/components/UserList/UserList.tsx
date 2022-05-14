import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { User } from "../../models/UserModel";
import { UserCard } from "../UserCard/UserCard";
import { Container } from "./styles";
export function UserList() {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setIsLoading(true);
      const users = await api.getUsers();
      setUserList(users);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function onClickEdit() {
    //
  }

  return (
    <Container>
      <h1>Lista de Usuários</h1>
      {isLoading && <h3>Carregando...</h3>}
      {isError && <h3>Ocorreu algum problema :(</h3>}
      {userList.map((user) => (
        <UserCard user={user} onClickEdit={onClickEdit} />
      ))}
    </Container>
  );
}
