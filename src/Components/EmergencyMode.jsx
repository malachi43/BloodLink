import EmergencyOverview from "./EmergencyOverview";
import ModifyCancelRequest from "./ModifyCancelRequest";
import RequestDetails from "./RequestDetails";
import "./emergencymode.css";

export default function EmergencyMode() {
  return (
    <div className="emergencyContainer">
      <p className="emergencyHeader">Emergency Mode</p>
      <p className="emergencyText">
        "Emergency Mode helps you notify nearby donors immediately in urgent
        situations. This will prioritize your request and reach out to available
        donors."
      </p>
      <EmergencyOverview />
      <RequestDetails />
      <ModifyCancelRequest />
    </div>
  );
}
