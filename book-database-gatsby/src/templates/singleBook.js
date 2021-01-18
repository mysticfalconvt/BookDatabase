import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";
import { GlobalStyles } from "../Styles/globalStyles";

const BookPageStyles = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, minmax(200px, 1fr));

  .image {
    border-radius: 5%;
  }
`;

export default function SinglePizzaPage({ data: { book } }) {
  useEffect(() => {
    document.body.style.margin = "0px";
  }, []);
  return (
    <GlobalStyles>
      <SEO title={book.name} image={book.image?.asset?.fluid?.src} />
      <SEO title="Best Darn Book Database"></SEO>
      <main>
        <section className="glass">
          <BookPageStyles>
            <div className="image">
              <Img fluid={book.image.asset.fluid} />
            </div>
            <div>
              <h2 className="mark">{book.name}</h2>
              <h3>Tags:</h3>
              <ul>
                {book.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>
                ))}
              </ul>
            </div>
          </BookPageStyles>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </GlobalStyles>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    book: sanityBook(slug: { current: { eq: $slug } }) {
      _id
      slug {
        current
      }
      tags {
        _id
        name
      }
      name
      isbn
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
