import styled from "styled-components";
import DonorWayTable from "./DonorWayTable";

export default function DonorOnTheirWay() {
  return (
    <Container>
      <Title>Donors On Their Way</Title>
      <DonorWayTable />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  
`;
const Title = styled.p`
  padding: 0.5em 1em;
  color: #FFFFFF;
  background-color: #008000;
  text-align: start;
  border-radius: 5px;
`;
