import { Button, Image } from "react-bootstrap";
import { User } from "../../models/UserModel";

import { Container, Content } from "./styles";

interface Props {
  user: User;
  onClickEdit: () => void;
}
export function UserCard({ user, onClickEdit }: Props) {
  return (
    <>
      <Container>
        <Image roundedCircle src={user.avatar} />
        <Content>
          <h3>{user.name}</h3>
          <Button
            onClick={onClickEdit}
            style={{ width: "100px" }}
            variant="primary"
          >
            editar
          </Button>
        </Content>
      </Container>
    </>
  );
}
