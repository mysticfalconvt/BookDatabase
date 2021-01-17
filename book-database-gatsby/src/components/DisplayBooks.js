import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const DisplayBookStyles = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* overflow: scroll; */

  .cards {
    display: grid;
    grid-gap: 1fr;
    grid-template-columns: repeat(3, 1fr);
    /* overflow: scroll; */
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .card {
    display: grid;
    grid-template-columns: 1fr;
    background: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.5)
    );
    border-radius: 1rem;
    margin: 1rem 1rem;
    padding: 0.5rem;
    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
    justify-content: space-between;
    /* overflow: auto; */
  }

  .bookImage {
    display: block;
    border-radius: 1rem;
    overflow: auto;
  }
`;

export default function DisplayBooks(props) {
  const books = props.books;
  return (
    <DisplayBookStyles>
      <div className="title">
        <h1>Books</h1>
      </div>
      <div className="cards">
        {books.map((book) => {
          return (
            <div className="card" key={book.slug.current}>
              <Img
                className="bookImage"
                fluid={book.image.asset.fluid}
                alt={book.name}
              />
              <h3>{book.name}</h3>
            </div>
          );
        })}
      </div>
    </DisplayBookStyles>
  );
}
