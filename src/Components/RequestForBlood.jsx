import styled from "styled-components";

export default function RequestForBlood() {
  return (
    <Container class="container">
      <div class="blood-main">
        <p class="blood-header">Request for Blood Donation</p>
        <p class="body">Need blood? Sign up as recipient</p>
        <button class="blood-btn">Sign Up</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  .blood-main {
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    padding: 3em;
    width: 60%;
  }
  p.body {
    margin-block-end: 1em;
    color: #706f6f;
  }

  .blood-header {
    margin-block-end: 0.7em;
    font-weigth: 700;
    font-size: 1.5em;
  }

  .blood-btn {
    background-color: #008000;
    color: #ffffff;
    padding: 1em 4em;
    border-radius: 5px;
    margin-block-start: 3em;
  }
`;
