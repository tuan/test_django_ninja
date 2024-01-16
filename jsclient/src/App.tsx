import { useState } from "react";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <article>
        <header>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={typescriptLogo} className="logo react" alt="React logo" />
          </a>
          <h1>Vite + TS</h1>
        </header>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <footer>Click on the Vite and React logos to learn more</footer>
      </article>
    </div>
  );
}

export default App;
