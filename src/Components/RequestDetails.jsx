import "./requestdetails.css";

export default function RequestDetails() {
  return (
    <div className="requestDetailContainer">
      <div className="requestDetailHeader">
        <p>Request Details</p>
      </div>
      <div>
        <p>Patient: Ayomide Vincent</p>{" "}
      </div>
      <div>
        <p>Blood Group Required: O+</p>{" "}
      </div>
      <div>
        <p>Units Required: 3 units</p>
      </div>
      <div>
        <p>Request Reason: Cardiac surgery</p>
      </div>
      <div>
        <p>Requested By :General Hospital Ikeja </p>
      </div>
      <div>
        <p>
          {" "}
          Additional Instructions: The donor must be free from any chronic
          illness and must not have donated blood in the last 3 months.
        </p>
      </div>
    </div>
  );
}
