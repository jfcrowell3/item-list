import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('itemList'))
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('itemList', JSON.stringify(newItems));
  };

  const addItem = (description) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, description };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="To-do List" />
      <AddItem
        handleAdd={handleAdd}
        setNewItem={setNewItem}
        newItem={newItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.description.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        newItem={newItem}
        setNewItem={setNewItem}
        search={search}
        setSearch={setSearch}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
