import styled from "styled-components";

export default function EmergencyOverview() {
  return (
    <Container>
      <div class="emergency-overview-header">Emergency</div>
      <div class="emergency-stat">
        <div class="stat">
          <div>
            <p>10+</p>
            <p>Donor Notified</p>
          </div>
          <div>
            <p>7+</p>
            <p>Responded</p>
          </div>
        </div>
        <div className="stat">
          <div>
            <p>5</p>
            <p>Confirmed</p>
          </div>
          <div>
            <p>2</p>
            <p>On their way</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .stat {
    width: 100%;
    display: grid;
    gap: 20px;
    margin-block: 1em;
    grid-template-columns: 6fr 6fr;

    p{
    font-size: 0.7rem;
    }
  }

  .stat div{
    background-color: #FFFFFF;
    padding: 0.5em 1em;
    text-align: start;
    border-radius: 5px;
  }

  .emergency-overview-header {
    padding: 0.5em 1em;
    color: #ffffff;
    background-color: #8b0a1a;
    text-align: start;
    border-radius: 5px;
  }

  emergency-stat {
    display: grid;
    grid-template-rows: auto;
  }
`;
