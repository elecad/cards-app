import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<IndexPage />} path="/scanPage" />
    </Routes>
  );
}

export default App;
