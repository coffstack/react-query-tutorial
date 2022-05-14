import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../api/api";
import { User } from "../../models/UserModel";

interface Props {
  show: boolean;
  user: User;
  handleClose: () => void;
}
export function EditModal({ show, handleClose, user }: Props) {
  const [value, setValue] = useState(user.name);

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    () => api.updateUserName(user.id, value),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user-list");
        handleClose();
      },
    }
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Atualizar Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => mutate()}>
          {isLoading ? "Carrendo..." : "Salvar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
