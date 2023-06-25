import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Contents() {
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
        <main>
            {items.length ? (
                <ul>
                    {
                        items.map(item => (
                            <li className="item" key={item.id}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheck(item.id)}
                                    checked={item.checked}
                                />
                                <label
                                    style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                    onDoubleClick={() => handleCheck(item.id)}
                                >{item.item}</label>
                                <FaTrashAlt
                                    onClick={() => handleDelete(item.id)}
                                    role="button"
                                    tabIndex="0"
                                />
                            </li>
                        ))
                    }
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>List is empty!</p>
            )}
            
        </main>
    )
}

export default Contents;
