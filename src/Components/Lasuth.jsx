import "./lasuth.css";
const imgUrl = "../../images/lasuth.png";

export default function Lasuth() {
  return (
    <div className="lasuth">
      <div className="lasuthName">
        <p>LASUTH</p>
        <p id="clinic">Clinic</p>
      </div>
      <div className="generalInfoContainer">
        <p className="generalInfo">General Information</p>
        <div className="infoMain">
          <div className="data">
            <p>Location</p>
            <p>1-5 Oba Akinjobi Way, Street, Ikeja 101233, Lagos</p>
          </div>
          <div className="data">
            <p>Telephone</p>
            <p>+2349074563251</p>
          </div>
          <div className="data">
            <p>License no</p>
            <p>17GF89YT0</p>
          </div>
        </div>
      </div>
      <div className="lasuthImageWrapper">
        <img src={imgUrl} alt="lasuth logo" />
      </div>
    </div>
  );
}
