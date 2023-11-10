import Form from "./Form";
import { useState } from "react";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

//store and retrieve data in browser's local storage: key value pairs
// const getLocalStorage = () => {
//   const list = localStorage.getItem("list");
//   if (list) {
//     list = JSON.parse(localStorage.getItem("item")); //parsed from Json format and returned an array
//   } else {
//     list = [];
//   }
//   return list;
// };

//save the items array into local storage , called when we want to update the local storage with the latest data
const setLocalStorage = (items) => {
  localStorage.setItem("myList", JSON.stringify(Items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);

  function handleAddItems(description) {
    const newItem = {
      name: description,
      isPacked: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`${newItem.name} added!`);
  }

  function handleDeleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
  }

  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // }

  function handleClearList() {
    setItems([]);
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, isPacked: !item.completed };
        return newItem;
      } else return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form handleAddItems={handleAddItems} />
      <Items items={items} removeItem={handleDeleteItem} editItem={editItem} />
    </section>
  );
};

export default App;
