import "./requesttracker.css";

export default function RequestTracker() {
  return (
    <div className="container">
      <div className="requestTracker">
        <div className="heading">
          <p>Request Tracker</p>
        </div>
        <div className="main">
          <div className="requestTrackHeader">
            <div className="requestStatus">
              <p className="requestStat selected">Pending</p>
              <p className="requestStat">Waiting</p>
            </div>
            <div className="searchContainer">
              <input
                className="search"
                type="search"
                placeholder="Search by Request ID"
              />
            </div>
          </div>
          <div className="requestIdContainer">
            <div className="requestMain">
              <div className="requestBody">
                <div className="requestField">
                  <p>Request ID</p>
                  <p>Recipient</p>
                  <p>Blood Type</p>
                  <p>Requested Units</p>
                  <p>Requested Date</p>
                  <p>Urgency</p>
                  <p>Status</p>
                </div>
                <div className="requestValue">
                  <p>001A</p>
                  <p>LASUTH</p>
                  <p>A+</p>
                  <p>10</p>
                  <p>Oct 11, 2024</p>
                  <p>Emergency</p>
                  <p>Pending</p>
                </div>
              </div>
              <div className="buttonWrapper">
                <button className="cancelRequest">X Cancel Request</button>
              </div>
            </div>
            <div className="requestMain">
              <div className="requestBody">
                <div className="requestField">
                  <p>Request ID</p>
                  <p>Recipient</p>
                  <p>Blood Type</p>
                  <p>Requested Units</p>
                  <p>Requested Date</p>
                  <p>Urgency</p>
                  <p>Status</p>
                </div>
                <div className="requestValue">
                  <p>008X</p>
                  <p>LASUTH</p>
                  <p>B+</p>
                  <p>3</p>
                  <p>Oct 10, 2024</p>
                  <p>Normal</p>
                  <p>Pending</p>
                </div>
              </div>
              <button>X Cancel Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
