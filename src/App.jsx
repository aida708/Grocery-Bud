import Form from "./Form";
import { useState } from "react";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    const newItem = {
      name: description,
      isPacked: false,
      id: nanoid(),
    };

    setItems([...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

    function handleClearList() {
      setItems([]);
    }
  }

  return (
    <section className="section-center">
      <Form handleAddItems={handleAddItems} />
      <Items items={items} removeItem={handleDeleteItem} />
    </section>
  );
};

export default App;
