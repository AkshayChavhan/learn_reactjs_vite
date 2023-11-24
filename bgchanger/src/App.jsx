import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  const colorSet = ["red", "green", "blue", "pink", "brown", "violet"];
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-full flex flex-wrap
    self-center items-center justify-center p-2"
    >
      {colorSet &&
        colorSet.length > 0 &&
        colorSet.map((colorItem) => (
          <>
            <div
              className="px-4 py-3 rounded-3xl"
              style={{ backgroundColor:colorItem }}
            >
              <button onClick={() => setColor(colorItem)}>{colorItem}</button>
            </div>
          </>
        ))}
    </div>
  );
}

export default App;
