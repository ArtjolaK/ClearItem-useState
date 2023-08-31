import React, { useState } from "react";
import { data } from "./data";
import "./index.css";

const UseState = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      {people.map(({ name, id }) => {
        const handleClick = (id) => {
          const clearItem = people.filter((person) => {
            return person.id !== id;
          });
          setPeople(clearItem);
        };
        return (
          <div key={id} className="item">
            {" "}
            <h1>{name}</h1>
            <button type="button" onClick={() => handleClick(id)}>
              Clear Item
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};
export default UseState;
