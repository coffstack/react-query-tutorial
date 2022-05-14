import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { User } from "../../models/UserModel";

interface Props {
  show: boolean;
  user: User;
  handleClose: () => void;
}
export function EditModal({ show, handleClose, user }: Props) {
  const [value, setValue] = useState(user.name);

  function handleSubmit() {
    //TODO
  }

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
        <Button variant="primary" onClick={() => handleSubmit()}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
