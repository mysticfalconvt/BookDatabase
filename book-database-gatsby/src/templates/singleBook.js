import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { GlobalStyles } from '../Styles/globalStyles';
import BookInfo from '../components/BookInfo';

// async function getBookFromIsbn(isbn) {
//   const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
//   const bookInfo = await res.json();
//   setBookInfo(bookInfo);
//   return bookInfo;
// }

const BookPageStyles = styled.div`
  padding: 2rem;
  overflow: auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(auto, 380px) auto;
  grid-column: span 2;
  @media (max-width: 1000px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
  .image {
    border-radius: 5%;
    /* max-height: max-content; */
  }
`;

export default function SingleBookPage({ data: { book } }) {
  const [bookInfo, setBookInfo] = useState();
  useEffect(() => {
    function mycallback(book) {
      return JSON.stringify(book);
    }
    async function getBookFromIsbn(isbn) {
      // const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
      const res = await fetch(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
      );
      console.log(res);
      const newbookInfo = await res.json();
      setBookInfo(newbookInfo);
      return bookInfo;
    }

    document.body.style.margin = '0px';
    const newBookInfo = getBookFromIsbn(book.isbn);
    // setBookInfo(newBookInfo);
  }, []);
  // console.dir(bookInfo)
  return (
    <GlobalStyles>
      <SEO title={book.name} image={book.image?.asset?.fluid?.src} />
      <SEO title="Best Darn Book Database" />
      <main>
        <section className="glass">
          <BookPageStyles>
            {/* <div className="image">
              <Img fluid={book.image.asset.fluid} />
            </div> */}
            <img
            width="100%"
              src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            />
            <div>
              <h1 className="">{book.name}</h1>
              <h2>Tags:</h2>
              <ul>
                {book.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>
                ))}
              </ul>
              <BookInfo bookInfo={bookInfo} />
            </div>
          </BookPageStyles>
        </section>
        {/* <div style={{ overflow: 'auto', height: 'auto' }}>
          <pre>{JSON.stringify(bookInfo, null, 2)}</pre>
        </div> */}
      </main>
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
      <div className="circle4" />
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
        id
        name
      }
      name
      isbn
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
