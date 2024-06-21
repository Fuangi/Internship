import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="view-all" element={<p>View All</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
