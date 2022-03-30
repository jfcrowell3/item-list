import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete, newItem, setNewItem }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>List is Empty</p>
      )}
    </main>
  );
};

export default Content;
