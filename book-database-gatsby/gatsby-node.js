import path, { resolve } from "path";

async function getBookFromIsbn(isbn) {
  console.log(isbn);
  const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
  const bookInfo = await res.json();
  return bookInfo;
}

async function TurnBooksIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const bookTemplate = path.resolve("./src/templates/singleBook.js");
  // 2. Query all books
  const { data } = await graphql(`
    query {
      books: allSanityBook {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each book and create a page for that book
  data.books.nodes.forEach((book) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `book/${book.slug.current}`,
      component: bookTemplate,
      context: {
        slug: book.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([TurnBooksIntoPages(params)]);
}
