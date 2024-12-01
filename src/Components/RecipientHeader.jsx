import "./recipientheader.css";
const imgUrl = "../images/doctor_blood_canister.png";

export default function RecipientHeader() {
  return (
    <div className="recipientHeaderContainer">
      <div className="recipientHeading">
        <h1>Receive Life-Saving Blood</h1>
        <p>
          BloodLink understands the urgency of medical needs. Our platform
          streamlines blood donation, ensuring timely transfusions.
        </p>
        <div className="searchDonor">
          <input id="donorSearch" type="search" placeholder="Enter your location" />
          <button className={`rqb`}>Find a Donor</button>
        </div>
        <div className="summary">
          <div>
            <p>100+</p>
            <p>Receivers</p>
          </div>
          <div>
            <p>50+</p>
            <p>Registered Organizations</p>
          </div>
        </div>
      </div>
      <div className="recipientImageWrapper">
        <img src={imgUrl} alt="" placeholder="doctor holding blood canister" />
      </div>
    </div>
  );
}
