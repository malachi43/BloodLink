import "./requestForBlood.css";
import {Link} from 'react-router-dom'

export default function RequestForBlood() {
  return (
    <div className="container">
      <div className="bloodMain">
        <p className="bloodHeader">Request for Blood Donation</p>
        <p className="body">Need blood? Sign up as recipient</p>
        <Link reloadDocument to='/requestform'><button className="bloodBtn">Request Now</button></Link>
      </div>
    </div>
  );
}
