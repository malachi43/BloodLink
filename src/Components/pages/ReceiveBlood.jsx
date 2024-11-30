import "./receiveblood.css";
import RecipientHeader from "../RecipientHeader";
import DonorStat from "../DonorStat";
import RequestTracker from "../RequestTracker";
import DonationRequestHistory from "../DonationRequestHistory";
import RequestForBlood from "../RequestForBlood";
import EmergencyMode from "../EmergencyMode";
import Lasuth from "../Lasuth";
import RecentUpdate from "../RecentUpdate";
import Row from "../Row";
import ColumnOne from "../ColumnOne";
import ColumnTwo from "../ColumnTwo"
import DonorOnTheirWay from "../DonorOnTheirWay";


export default function ReceiveBlood() {
  return (
    <div className="receiveBloodContainer">
      <RecipientHeader />
      <Row>
        <ColumnOne>
          <Lasuth />
          <RecentUpdate />
        </ColumnOne>
        <ColumnTwo>
          <DonorStat />
          <RequestTracker />
          <DonationRequestHistory />
        </ColumnTwo>
      </Row>
      <RequestForBlood />
      <EmergencyMode />
    </div>
  );
}
