import React from "react";

export default function BookInfo({ bookInfo }) {
  if (bookInfo) {
    return (
      <div>
        <p>{bookInfo.by_statement}</p>
        <p>{bookInfo.copyright_date}</p>
      </div>
    );
  } else return <div></div>;
}
