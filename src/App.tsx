import { Route, Routes } from "react-router-dom";

import { router } from "@/router/router.tsx";

function App() {
  return (
    <Routes>
      {router.map((r) => (
        <Route key={r.path} element={r.element} path={r.path} />
      ))}
    </Routes>
  );
}

export default App;
