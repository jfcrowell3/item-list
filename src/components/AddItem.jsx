import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ handleAdd, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleAdd}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        placeholder="Add Item"
        type="text"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
