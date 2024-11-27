import "./donationrequesthistory.css";

export default function DonationRequestHistory() {
  return (
    <div className="container">
      <div className="requestHistory">
        <p>Donation Request History</p>
        <div className="requestStats">
          <div className="searchWrapper">
            <input type="search" placeholder="Search by Request ID" />
          </div>
          <div className="tableWrapper">
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Request Date</th>
                  <th>Blood Type</th>
                  <th>Donor Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* first row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>O+</td>
                  <td>Ifeoluwa Awe</td>
                  <td>fulfilled</td>
                </tr>
                {/* second row */}
                <tr>
                  <td>456B</td>
                  <td>2024-10-10</td>
                  <td>A+</td>
                  <td>Jane Smith</td>
                  <td>fulfilled</td>
                </tr>
                {/* third row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>O+</td>
                  <td>Isaac Joe</td>
                  <td>fulfilled</td>
                </tr>
                {/* fourth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>AB+</td>
                  <td>Bisoye Are</td>
                  <td>fulfilled</td>
                </tr>
                {/* fifith row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>B+</td>
                  <td>Immaculate J</td>
                  <td>fulfilled</td>
                </tr>
                {/* sixth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>O+</td>
                  <td>Fiwa Jacobs</td>
                  <td>fulfilled</td>
                </tr>
                {/* seventh row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>AB-</td>
                  <td>Emily Clark</td>
                  <td>fulfilled</td>
                </tr>
                {/* eigth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>A-</td>
                  <td>Anna Taylor</td>
                  <td>fulfilled</td>
                </tr>
                {/* ninth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>AB+</td>
                  <td>David Lee</td>
                  <td>fulfilled</td>
                </tr>
                {/* tenth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>A-</td>
                  <td>Chris Evans</td>
                  <td>fulfilled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
