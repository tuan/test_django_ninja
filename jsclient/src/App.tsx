import { useState } from "react";
import viteLogo from "/vite.svg";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack gap={3} className="col-8 mx-auto align-items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>Vite + React</h1>
      <Stack gap={4} className="align-items-center">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Stack>
      <div className="text-center">
        Click on the Vite and React logos to learn more
      </div>
    </Stack>
  );
}

export default App;
