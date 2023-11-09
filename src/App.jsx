import Form from "./Form";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
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
      <Form onAddItems={handleAddItems} />
    </section>
  );
};

export default App;
