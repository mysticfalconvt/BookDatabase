import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import DisplayBooks from "../components/DisplayBooks";
import SEO from "../components/SEO";
import { GlobalStyles } from "../Styles/globalStyles";

function filterBooks(allBooks, tags) {
  if (!tags.length) {
    return allBooks;
  }
  const filterdBooks = allBooks.filter((book) => {
    const tagnames = book.tags.map((tag) => tag.name);
    const isBookShown = tagnames.some((val) => tags.indexOf(val) !== -1);
    return isBookShown;
  });
  return filterdBooks;
}

export default function Index({ data }) {
  useEffect(() => {
    document.body.style.margin = "0px";
  }, []);
  const [tagList, setTaglist] = useState([...data.tags.nodes]);
  const [selectedTags, setSelectedTags] = useState([]);
  const allBooks = data.allBooks.nodes;
  const [booksToDisplay, setBooksToDisplay] = useState(allBooks);
  useEffect(() => {
    setBooksToDisplay(
      filterBooks(
        allBooks,
        selectedTags.map((tag) => tag.name),
      ),
    );
  }, [selectedTags]);
  return (
    <GlobalStyles>
      <SEO title="Best Darn Book Database"></SEO>
      <main>
        <section className="glass">
          <Dashboard
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tagList}
            setTaglist={setTaglist}
          ></Dashboard>
          <DisplayBooks
            title="The Best Darn Book Database"
            books={booksToDisplay}
          ></DisplayBooks>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </GlobalStyles>
  );
}

export const query = graphql`
  query indexQuery {
    tags: allSanityTags {
      nodes {
        id
        name
        description
      }
    }
    allBooks: allSanityBook {
      nodes {
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
  }
`;
