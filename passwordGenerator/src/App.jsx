import { useEffect, useState, useRef } from "react";

function App() {
  const inputRef = useRef();

  const [password, setPassword] = useState("ssds");
  const [length, setLength] = useState(6);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharactersAllowed, setIsCharacterAllowed] = useState(false);

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) {
      str += "0123456789";
    }
    if (isCharactersAllowed) {
      str += "!@#$%^&*()_+{}|<>";
    }

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
      console.log(`${randomIndex}`);
    }
    setPassword(pass);
  };

  const handleCopyClipboard = () => {
    try {
      // Copy the text inside the text field
      navigator.clipboard.writeText(password);
      const inputElement = inputRef.current;
      inputElement.select();
      inputElement.setSelectionRange(0, 99);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generatePassword();
  }, [isNumberAllowed, isCharactersAllowed, length]);
  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-center flex-col">
        <div>
          <h1 className="px-2 text-4xl text-pink-600">Password Generator</h1>
        </div>
        <div>
          <input
            type="text"
            className="border-2 px-5 py-2"
            value={password}
            disabled
            ref={inputRef}
          />
          <button onClick={handleCopyClipboard} className="border px-5 py-2">
            COPY
          </button>
        </div>
        <div className="flex p-3">
          <div>
            <input
              type="range"
              min={6}
              max={99}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="p-3"
            />
            <label>Length : {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={isNumberAllowed}
              onChange={() => setIsNumberAllowed((prev) => !prev)}
              className="p-3"
            />
            <label>Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={isCharactersAllowed}
              onChange={() => setIsCharacterAllowed((prev) => !prev)}
              className="p-3"
            />
            <label>Character</label>
            {/* checkbox */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
