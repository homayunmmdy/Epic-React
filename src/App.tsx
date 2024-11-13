import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const allItems = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
]
const App = () => {
  const [items, setItems] = useState(allItems)

	function addItem() {
		const itemIds = items.map(i => i.id)
		const itemToAdd = allItems.find(i => !itemIds.includes(i.id))
		if (itemToAdd) setItems([...items, itemToAdd])
	}

	function removeItem(id: string) {
		setItems(items.filter(i => i.id !== id))
	}


  return (
    <div className="keys">
			<button disabled={items.length >= allItems.length} onClick={addItem}>
				add item
			</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>
						<button onClick={() => removeItem(item.id)}>remove</button>{' '}
						<label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
						<input id={`${item.id}-input`} defaultValue={item.value} />
					</li>
				))}
			</ul>
		</div>
  );
};

export default App;
