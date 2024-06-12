import AddPet from "@containers/Profile/addPet/AddPet";
import styled from "@emotion/styled";

export default function AddPetPage() {
  return (
    <Container>
      <AddPet />
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 24px;
`;
