import DonorSignupContainer from "../DonorSignupContainer";
import SignUp from "./Signup";
import DonorPic from "../DonorPic";
import Donate from "../Donate";
import UpcomingDonation from "../UpcomingDonation";
import Appointment from "../Appointment";
import DonorHeader from "../DonorHeader";

export default function DonorProfile() {
  return (
    <div>
      <DonorHeader/>
      <DonorSignupContainer>
        <DonorPic />
        <SignUp />
      </DonorSignupContainer>
      <Donate />
      <UpcomingDonation />
      <Appointment/>
    </div>
  );
}
