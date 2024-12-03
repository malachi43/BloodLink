const imgUrl = "../images/doctor_blood_canister.png";
import styled from "styled-components";

export default function RecipientHeader() {
  return (
    <Container>
      <Header>
        <HeaderTextContainer>
          <h1>Receive Life-Saving Blood</h1>
          <p>
            BloodLink understands the urgency of medical needs. Our platform
            streamlines blood donation, ensuring timely transfusions.
          </p>
          <div class="location-wrapper">
            <input type="text" placeholder="Enter your location" />
            <button>Find a Donor</button>
          </div>
          <div class="stat-wrapper">
            <div class="stat">
              <p>100+</p>
              <p>Receivers</p>
            </div>
            <div class="stat">
              <p>50+</p>
              <p>Registered Organizations</p>
            </div>
          </div>
        </HeaderTextContainer>
        <HeaderImageContainer>
          <img src={imgUrl} alt="doctor with blood canister." />
        </HeaderImageContainer>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: grid;
  margin: 2em;
  gap: 40px;
  grid-gap: 40px;

  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

const HeaderTextContainer = styled.div`
  grid-column: 1/7;
  h1 {
    font-weight: 700;
    font-size: 3rem;
  }
  .location-wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-block-start: 2em;
    background-color: #008000;
    border-radius: 5px;

    input {
      margin-block: 1em;
      background-color: transparent;
      padding-inline-start: 1em;
    }

    button {
      background-color: #ffffff;
      padding: 0.2em 1em;
      margin: 1em;
      font-size: 0.7em;
      color: #008000;
      border-radius: 5px;
    }
  }
  .stat-wrapper {
    margin-block-start: 2em;
    display: flex;
    gap: 20px;

    .stat {
      display: flex;
      flex-direction: column;

      p:first-child {
        font-size: 1.5em;
        font-weight: 700;
      }
      p:nth-child(2) {
        font-size: 0.5em;
      }

      &:nth-child(2) {
        p:first-child {
          text-align: center;
        }
      }
      &:first-child {
        p:nth-child(2) {
          text-align: end;
        }
      }
    }
  }

  @media (max-width:768px){
  & {
   
  }
  }
`;

const HeaderImageContainer = styled.div`
  grid-column: 7/13;
`;
