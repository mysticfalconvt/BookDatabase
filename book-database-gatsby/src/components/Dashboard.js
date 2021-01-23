import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DashboardStyles = styled.div`
  flex: 1;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  min-width: max-content;
  min-height: max-content;
  max-width: max-content;

  @media (max-width: 800px) {
    margin: 1rem;
    padding: 0.5rem;
  }
  @media (max-width: 650px) {
    margin: 0.25em;
    padding: 1rem;
    width: 100%;
    /* display: grid; */
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    min-height: 10rem;
    overflow: auto;
    /* grid-auto-flow: dense; */
    max-width: max-content;
    break-after: always;
  }
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(200, 20, 150, 0.2),
    rgba(108, 219, 235, 0.3)
  );
  border-radius: 2rem;
  .title {
    margin-bottom: 2rem;
    padding: 1rem;
    min-height: fit-content;
    /* overflow: auto; */
    max-width: max-content;
    h1: {
      height: 2rem;
      margin: 0;
    }
    @media (max-width: 550px) {
      display: none;
      margin: 0;
      padding: 0;
    }
  }
  .selectedTags {
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      grid-column: 2;
    }
  }
  .tag {
    padding: 0.2rem;
    @media (max-width: 500px) {
      grid-column: 1;
    }
  }
  button {
    border: none;
    font-size: 1rem;
    padding: 0.3rem;
    border-radius: 0.5rem;
    background: linear-gradient(
      to right top,
      rgba(200, 20, 150, 0.3),
      rgba(108, 219, 235, 0.7)
    );
  }
`;

export default function Dashboard({
  //   tags,
  tagList,
  setTaglist,
  selectedTags,
  setSelectedTags,
}) {
  //   const [tagList, setTaglist] = useState([...tags.nodes]);
  //   const [selectedTags, setSelectedTags] = useState([]);

  return (
    <DashboardStyles>
      <div className="title">
        <h2>Choose Tags</h2>
      </div>
      <div className="selectedTags">
        {selectedTags.length > 0 && <span>Selected:</span>}
        {selectedTags.map((tag, index) => (
          <div className="tag" key={tag.id}>
            <button
              type="button"
              onClick={() => {
                setTaglist([...tagList, tag]);
                selectedTags.splice(index, 1);
                setSelectedTags([...selectedTags]);
              }}
            >
              ❌ {tag.name}
            </button>
          </div>
        ))}
      </div>
      <div className="tags">
        {tagList.map((tag, index) => (
          <div key={tag.id} className="tag">
            <button
              type="button"
              onClick={() => {
                setSelectedTags([...selectedTags, tag]);
                tagList.splice(index, 1);
                setTaglist(tagList);
              }}
            >
              {tag.name}
            </button>
          </div>
        ))}
      </div>
    </DashboardStyles>
  );
}
