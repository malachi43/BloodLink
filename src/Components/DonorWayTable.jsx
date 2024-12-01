import styled from "styled-components";

export default function DonorOnTheirWay() {
  return (
    <Contanier>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Type</th>
              <th>Location</th>
              <th>Arrival</th>
              <th>Other Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Adeyemi</td>
              <td>O+</td>
              <td>Ikeja</td>
              <td>20mins</td>
              <td>View Info</td>
            </tr>
            <tr>
              <td>Taiwo Israel</td>
              <td>O-</td>
              <td>Ogba</td>
              <td>30mins</td>
              <td>View Info</td>
            </tr>
            <tr>
              <td>Owolawi Tola</td>
              <td>O-</td>
              <td>Ikeja</td>
              <td>15mins</td>
              <td>View Info</td>
            </tr>
          </tbody>
        </Table>
        <Socials>
          <span>
            <i class="fa-solid fa-phone"></i>
          </span>
          <span>
            <i class="fa-solid fa-message"></i>
          </span>
          <span>
            <i class="fa-brands fa-whatsapp"></i>
          </span>
        </Socials>
      </TableWrapper>

      <OtherInfoContainer>
        <Col>
          <Info>
            <p>Other Information</p>
          </Info>
          <Info>
            <p>Donation Confirmation:</p>
            <p>Donor is on the way to the General Hospital, Gbagada</p>
          </Info>
          <Info>
            <p>Medical History:</p>
            <p>No prior health issues related to blood donation</p>
          </Info>
          <Info>
            <p>Donation Center Details:</p>
            <p>Gbagada General Hospital, Blood Bank Unit</p>
          </Info>
        </Col>
        <Col>
          <Info>
            <p>Total Requests</p>
          </Info>
          <Info>
            <Summary>
              <Success>
                <p>65%</p>
                <p>Successful</p>
              </Success>
              <NoSuccess>
                <p>35%</p>
                <p>Unsuccessful</p>
              </NoSuccess>
            </Summary>
          </Info>
        </Col>
      </OtherInfoContainer>
    </Contanier>
  );
}

const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1em;
  margin-block-start: 0.5em;
  background-color: transparent;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding-block-end: 1em;
  flex: 1;
`;
const Table = styled.table`
  width: 100%;
  margin-block-end: 1em;
  background-color: #ffffff;
  td {
    color: #404040;
    text-align: start;
    padding: 0.5em;
    border: none;
  }
  tr {
    border: none;
  }
  th {
    text-align: start;
    color: #ffffff;
    background-color: #8b0a1a;
    padding: 0.5em;
    border: none;
    font-size: 0.5rem;
  }
  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
  padding-inline: 0.5em;
  span {
    max-width: 100%;
    min-height: auto%;
    background-color: #8b0a1a;
    color: #ffffff;
    border-radius: 5px;
    padding: 0.2em 0.5em;
    margin-inline-end: 1em;
    margin-block-start: 1em;
    font-size: 0.5rem;
  }
`;

const OtherInfoContainer = styled.div`
  display: flex;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5em;
  font-size: 0.5em;
  background-color: #ffffff;
  border-radius: 3px;
  & p:first-child {
    font-weight: 700;
    margin-block-end: 0.5em;
  }

  @media (max-width: 768px) {
    & p {
      font-size: 0.4em;
    }
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 1;
  margin-block: 0.5em;
  margin-inline-end: 0.5em;
  &:nth-child(2) {
    flex: 1;
  }
`;

const Summary = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 768px) {
    & {
      gap: 0.2em;
    }
  }
`;
const Success = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  background-color: #d9d9d9;
  width: fit-content;
  height: auto;
  color: #404040;
  padding: 1.5em;
  width: 45%;

  @media (max-width: 768px) {
    & {
      padding: 1em;
    }
  }
`;
const NoSuccess = styled(Success)``;
