import React from 'react';

export default function BookInfo({ bookInfo }) {
  console.dir(bookInfo);
  if (bookInfo) {
    return (
      <div>
        <img
          src={bookInfo?.cover?.large}
          alt={bookInfo.thumbnail_url}
          width="100px"
        />
        {/* <p>{JSON.stringify(bookInfo.cover)}</p> */}
        <p>info{bookInfo.by_statement}</p>
        <p>{bookInfo.thumbnail_url}</p>
        <div style={{ overflow: 'auto', height: 'auto' }}>
          <pre>{JSON.stringify(bookInfo, null, 2)}</pre>
        </div>
      </div>
    );
  }
  return <div />;
}
