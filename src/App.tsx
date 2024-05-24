import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add an item
    // Use the Spread operator "..." to copy all the itens of the orinal array into the new array
    // Then add a new item "exciting"
    setTags({ ...tags, 'exciting' });

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    // Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
