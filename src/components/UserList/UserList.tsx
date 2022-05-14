import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { User } from "../../models/UserModel";
import { Container } from "./styles";
export function UserList() {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const users = await api.getUsers();
    setUserList(users);
  }

  return (
    <Container>
      <h1>Lista de Usuários</h1>
    </Container>
  );
}
