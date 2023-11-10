//#### SingleItem

// In SingleItem, set up a state variable called isChecked with a default value of the item's completed property.
// Render a checkbox and add inline styles to add or remove the text-decoration: line-through
// property based on the isChecked value. Set up functionality to toggle the isChecked state variable
// when the checkbox is clicked

import React, { useState } from "react";

export default function SingleItem({ item, removeItem }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="button" type="button" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
}
