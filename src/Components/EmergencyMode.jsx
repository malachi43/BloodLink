import EmergencyOverview from "./EmergencyOverview";
import ModifyCancelRequest from "./ModifyCancelRequest";
import RequestDetails from "./RequestDetails";
import DonorOnTheirWay from "./DonorOnTheirWay";
import "./emergencymode.css";
import styled from "styled-components";

export default function EmergencyMode() {
  return (
    <div className="emergencyContainer">
      <p className="emergencyHeader">Emergency Mode</p>
      <p className="emergencyText">
        "Emergency Mode helps you notify nearby donors immediately in urgent
        situations. This will prioritize your request and reach out to available
        donors."
      </p>
      <Container>
        <Col>
          <EmergencyOverview />
          <RequestDetails />
        </Col>
        <Col>
          <DonorOnTheirWay />
        </Col>
      </Container>

      <ModifyCancelRequest />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    width: 45%;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
