import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./index.scss";
import View from "./components/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="interns" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
