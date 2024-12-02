import styled from "styled-components";
import Lasuth from "./Lasuth";
import DonorStat from "./DonorStat";
import RecentUpdate from "./RecentUpdate";
import RequestTracker from "./RequestTracker";
import DonationRequestHistory from "./DonationRequestHistory";

export default function RecipientRequestMain() {
  return (
    <Container>
      <ColOne>
        <Lasuth />
        <RecentUpdate />
      </ColOne>
      <ColTwo>
        <DonorStat />
        <RequestTracker />
        <DonationRequestHistory />
      </ColTwo>
    </Container>
  );
}

const ColOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    & {
    }
  }
`;

const ColTwo = styled(ColOne)`
  @media (max-width: 768px) {
    & {
    }
  }
`;

const Container = styled.div`
  display: grid;
  margin: 2em;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: auto;
  gap: 20px;

  @media (max-width: 768px) {
    & {
      display: grid;
      grid-template-columns: auto;
      gap: 20px;
      margin-block-start: 6em;
    }
  }
`;
