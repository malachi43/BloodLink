import styled from "styled-components";

export default function DonorStat() {
  return (
    <Container>
      <div>
        <p>Number of Donors Matched</p>
        <p>20</p>
      </div>
      <div>
        <p>Blood Donation Requests</p>
        <p>30</p>
      </div>
      <div>
        <p>Successful Donations</p>
        <p>14</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  font-size: 0.7rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.7em;
    background-color: #008000;
    border-radius: 5px;
  }
  div p {
    text-align: center;
    color: #ffffff;
  }
  div p:nth-child(2) {
    font-size: 1.5rem;
  }
`;
