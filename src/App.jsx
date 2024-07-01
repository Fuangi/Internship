import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./index.scss";
import View from "./components/View";
import Thanks from "./components/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="interns" element={<View />} />
        <Route path="bye" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
