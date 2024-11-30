import "./emergencyoverview.css";

export default function EmergencyOverview() {
  return (
    <div className="overviewContainer">
      <div className="emergencyOverviewHeader">Emergency</div>
      <div className="emergencyStat">
        <div className="stat">
          <div>
            <p>10+</p>
            <p>Donor Notified</p>
          </div>
          <div>
            <p>7+</p>
            <p>Responded</p>
          </div>
        </div>
        <div className="stat">
          <div>
            <p>5</p>
            <p>Confirmed</p>
          </div>
          <div>
            <p>2</p>
            <p>On their way</p>
          </div>
        </div>
      </div>
    </div>
  );
}
