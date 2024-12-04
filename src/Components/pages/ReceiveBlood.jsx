import styled from "styled-components";
import RecipientHeader from "../RecipientHeader";
import RequestForBlood from "../RequestForBlood";
import EmergencyMode from "../EmergencyMode";
import RecipientRequestMain from "../RecipientRequestMain";

export default function ReceiveBlood() {
  return (
    <Container >
      <RecipientHeader />
      <RecipientRequestMain />
      <RequestForBlood />
      <EmergencyMode />
    </Container>
  );
}

const Container = styled.div``
