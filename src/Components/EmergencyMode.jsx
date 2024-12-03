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
  margin-block-start: 1em;
  text-align: center;
  background-color: #8b0a1a1a;
  border-radius: 5px;
`;

const ParentContainer = styled.div`
  margin-inline: 2em;
`;
