import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      toast.error("Please provide a value");
      return;
    }

    handleAddItems(newItem); // Call the function passed as a prop
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
