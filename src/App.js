import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cards from "./page/Cards";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/cards">Перейти на страницу Cards</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/">
            <Route path="/cards" element={<Cards />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
