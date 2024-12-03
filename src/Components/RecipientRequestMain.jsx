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
`;

const ColTwo = styled(ColOne)``;

const Container = styled.div`
  display: grid;
  margin: 2em;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: auto;
  gap: 20px;

  @media (max-width:768px){
    & {
      margin: 0;
      margin-block-start: 6em;
    }
      
  }
`;
