// import "./recentupdate.css";
import styled from "styled-components";

export default function RecentUpdate() {
  return (
    <Container>
      <p>Recent Updates</p>
      <div class="update-container">
        <div class="update-status">
          <p class="selected">All Updates</p>
          <p>Recent Updates</p>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="Search Updates" />
        </div>
        <div class="update-wrapper">
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-block-start: 2em;

  & > p:first-child {
    font-size: 0.7rem;
    color: #8b0a1a;
    font-weight: 700;
    margin-block: 1em;
  }
  p {
  }

  .update-status {
    p {
      color: #ffffff;
    }
  }
  .update-container {
    display: grid;
    grid-template-column: 1fr;
    background-color: #8b0a1a;
    padding-inline: 1em;
    border-radius: 5px;

    .update-status {
      display: flex;
    }

    .update-wrapper {
      overflow-y: scroll;
      height: 20rem;
    }
    .update-wrapper .updates .update-info {
      display: flex;
      justify-content: space-between;
    }

    .update-wrapper .updates {
      background-color: #ffffff;
      margin-block: 0.5em;
      padding: 0.2em 1em;
      border-radius: 5px;
      font-size: 0.7rem;
    }

    .input-wrapper {
      border-radius: 5px;
      height: auto;
    }

    .input-wrapper input {
      width: 100%;
      font-size: 0.7rem;
      padding: 0.3em 3em;
      min-height: auto;
      border-radius: 5px;
    }

    .update-status > p {
      margin-inline-end: 1em;
      font-size: 0.7rem;
      margin-block: 1em;
    }
    .update-status > p:first-child {
      padding-block-end: 0.5em;
    }

    .selected {
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    }
  }
`;
