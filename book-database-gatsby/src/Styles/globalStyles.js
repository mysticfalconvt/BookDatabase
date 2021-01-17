import styled from "styled-components";

export const GlobalStyles = styled.div`
  height: 100vh; //100% view height
  width: 100vw; // 100% view width
  margin: 0;
  * {
    /* margin: 0; */
    /* padding: 0; */
    box-sizing: border-box;
    overflow: hidden;
  }

  h1 {
    color: #426696;
    font-weight: 600;
    font-size: 3rem;
    opacity: 0.8;
  }
  h2,
  p {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }

  h3 {
    color: #426696;
    font-weight: 600;
    opacity: 0.8;
  }

  main {
    min-height: 100vh;
    background: linear-gradient(to right top, rgba(200, 20, 150, 0.9), #6cdbeb);
    margin: 0px;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glass {
    background: white;
    min-height: 80vh;
    width: 80%;
    max-height: 85vh;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.2)
    );
    border-radius: 2rem;
    z-index: 2;
    backdrop-filter: blur(2rem);
    display: flex;
  }
  .circle1,
  .circle2 {
    background: white;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    );
    height: 20rem;
    width: 20rem;
    position: absolute;
    border-radius: 50%;
  }
  .circle3,
  .circle4 {
    background: white;
    background: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    );
    height: 22rem;
    width: 22rem;
    position: absolute;
    border-radius: 50%;
  }

  .circle1 {
    top: 5%;
    right: 5%;
  }
  .circle2 {
    bottom: 5%;
    left: 5%;
  }
  .circle3 {
    top: 8%;
    left: 2%;
  }
  .circle4 {
    bottom: 2%;
    right: 18%;
  }

  .link {
    display: flex;
    margin: 2rem 0rem;
    padding: 1rem 5rem;
    align-items: center;
  }
  .link h2 {
    padding: 0rem 2rem;
  }

  .books {
    flex: 2;
  }

  .status {
    margin-bottom: 3rem;
  }

  .status input {
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    border: none;
    width: 50%;
    padding: 0.5rem;
    border-radius: 2rem;
  }
`;
