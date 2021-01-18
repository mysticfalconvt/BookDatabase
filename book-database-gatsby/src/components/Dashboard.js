import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DashboardStyles = styled.div`
  flex: 1;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  min-width: min-content;
  max-width: max-content;
  /* justify-content: space-evenly; */

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
  }
  .selectedTags {
    margin-bottom: 1rem;
  }
  .tag {
    padding: 0.2rem;
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
        {selectedTags.map((tag, index) => {
          return (
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
          );
        })}
      </div>
      <div className="tags">
        {tagList.map((tag, index) => {
          return (
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
          );
        })}
      </div>
    </DashboardStyles>
  );
}
