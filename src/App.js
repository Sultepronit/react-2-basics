import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: 'something'
    },
    {
        id: 2,
        checked: false,
        item: 'something else'
    },
    {
        id: 3,
        checked: false,
        item: 'item 3'
    }
  ]);

  function handleCheck(id) {
    console.log(`key: ${id}`);
    const listItems = items.map(item => (item.id === id) ? { ...item, checked: !item.checked } : item);
    console.log(listItems);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  function handleDelete(id) {
    const listItems = items.filter(item => item.id !== id);
    console.log(listItems);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Grocery list" />
      <Contents
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
