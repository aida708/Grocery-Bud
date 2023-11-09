//create a fomr : input field and submit button
//when the user submits the form, handleSubmit is called

import React from "react";

import { useState } from "react";
export default function Form({ items }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, done: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <button type="submit" className="btn">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}
