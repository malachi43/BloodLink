import "./recentupdate.css";

export default function RecentUpdate() {
  return (
    <div className="recentUpdateContainer">
      <p className="recentUpdateHeader">Recent Updates</p>
      <div className="updateContainer">
        <div className="updateRequest">
            <p>All Updates</p>
            <p>Recent Updates</p>
        </div>
        <div className="searchUpdateWrapper">
            <input type="search" placeholder="Search Updates" />
        </div>
        <div className="updates">
          <div className="updateData">
            <div >
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div className="updateData">
            <div>
              <p>Reminder</p>
              <p>9:02am</p>
            </div>
            <p>Don't forget to check your donation status today</p>
          </div>
          <div className="updateData">
            <div>
              <p>Community Support Available</p>
              <p>Oct 10</p>
            </div>
            <p>Local donors are ready to help with your need</p>
          </div>
          <div className="updateData">
            <div>
              <p>Request Fulfilled</p>
              <p>Oct 10</p>
            </div>
            <p>Your blood request has been successfully fulfilled</p>
          </div>
          <div className="updateData">
            <div>
              <p>New Educational Resources Available</p>
              <p>Oct 9</p>
            </div>
            <p>"Explore new resources to learn more about blood donation</p>
          </div>
          <div className="updateData">
            <div>
              <p>Request Status Change</p>
              <p>Oct 9</p>
            </div>
            <p>The status of your request has been updated</p>
          </div>
          <div className="updateData">
            <div>
              <p>Matching Donor Found !</p>
              <p>Oct 5</p>
            </div>
            <p>A donor has been found to support your request</p>
          </div>
        </div>
      </div>
    </div>
  );
}
