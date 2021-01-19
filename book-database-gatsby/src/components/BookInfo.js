import React from "react";

export default function BookInfo({ bookInfo }) {
  console.dir(bookInfo)
  if (bookInfo) {
    return (
      <div>
        <p>{bookInfo.by_statement}</p>
        <p>{bookInfo.copyright_date}</p>
      </div>
    );
  } else return <div></div>;
}
