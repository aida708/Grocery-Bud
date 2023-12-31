//In Items, iterate over the list of items and render each one in a SingleItem component.
//For now, only render the name of the item.

import React from "react";
import SingleItem from "./SingleItem";

export default function Items({ items, removeItem, editItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        const { id } = item;
        return (
          <SingleItem
            key={id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
}
