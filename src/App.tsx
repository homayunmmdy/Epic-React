import { useState } from "react";

const App = () => {
  const [key, setKey] = useState(0)
	return (
		<div >
			{/* 🐨 add a key prop to this input and set it to the key state */}
			<input key={key} />
			<button onClick={() => setKey(key => key + 1)}>Reset</button>
		</div>
	)
};

export default App;
