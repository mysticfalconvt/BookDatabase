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
    text-align: center;
    height: max-content;
    margin: 0;
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
    font-family: "Goudy Bookletter 1911", serif;
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
    display: grid;
    grid-template-columns: 1fr 3fr;
    overflow: auto;
    @media (max-width: 500px) {
      width: 95%;
      grid-template-columns: 1fr;
      min-height: 90vh;
      max-height: 95vh;
    }
  }
  .circle1,
  .circle2 {
    background: white;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    );
    height: 16rem;
    width: 16rem;
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
    height: 20rem;
    width: 20rem;
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
    top: 4%;
    left: 2%;
  }
  .circle4 {
    bottom: 2%;
    right: 18%;
  }

  .title {
    margin-bottom: 0rem;
    padding: 1rem;
    min-height: fit-content;
    overflow: auto;
    grid-column: span 2;
    h1: {
      height: 2rem;
      margin: 0px;
    }
    @media (max-width: 500px) {
      /* display: none; */
      grid-column: 1;
      margin: 0px;
      padding: 0px;
      h1 {
        font-size: 2rem;
      }
    }
  }

  .books {
    flex: 2;
    overflow: auto;
  }

  @media (max-width: 800) {
    font-size: 0.8em;
  }
`;
