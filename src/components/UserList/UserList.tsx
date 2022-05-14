import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../api/api";
import { User } from "../../models/UserModel";
import { EditModal } from "../EditModal/EditModal";
import { UserCard } from "../UserCard/UserCard";
import { Container } from "./styles";
export function UserList() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { data, isError, isLoading } = useQuery("user-list", api.getUsers);

  return (
    <Container>
      <h1>Lista de Usuários</h1>
      {isLoading && <h3>Carregando...</h3>}
      {isError && <h3>Ocorreu algum problema :(</h3>}
      {data?.map((user) => (
        <UserCard user={user} onClickEdit={() => setSelectedUser(user)} />
      ))}
      {selectedUser && (
        <EditModal
          user={selectedUser}
          show={!!selectedUser}
          handleClose={() => setSelectedUser(null)}
        />
      )}
    </Container>
  );
}
