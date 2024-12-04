import EmergencyOverview from "./EmergencyOverview";
import ModifyCancelRequest from "./ModifyCancelRequest";
import RequestDetails from "./RequestDetails";
import DonorOnTheirWay from "./DonorOnTheirWay";
// import "./emergencymode.css";
import styled from "styled-components";

export default function EmergencyMode() {
  return (
    <ParentContainer>
      <EmergencyContainer class="emergency-container">
        <p class="emergency-header">Emergency Mode</p>
        <p class="emergency-text">
          "Emergency Mode helps you notify nearby donors immediately in urgent
          situations. This will prioritize your request and reach out to
          available donors."
        </p>
        <Container>
          <Col>
            <EmergencyOverview />
            <RequestDetails />
            <ModifyCancelRequest />
          </Col>
          <Col>
            <DonorOnTheirWay />
          </Col>
        </Container>
      </EmergencyContainer>
    </ParentContainer>
  );
}

const Container = styled.div`
  display: grid;
  margin: 2em;
  gap: 20px;
  grid-template-columns: 6fr 6fr;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmergencyContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  padding-block: 2em;
  margin-block-start: 1em;
  text-align: center;
  background-color: #8b0a1a1a;
  border-radius: 5px;
  p {
    font-family: "Rethink Sans", sans-serif;
  }

  .emergency-header {
    font-family: "Lora", serif;
    font-size: 1.5rem;
    font-weight: 700;
    padding-block-end: 0.5em;
  }
`;

const ParentContainer = styled.div`
  margin-block: 3em;
  margin-inline: 2em;
`;
