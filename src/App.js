import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ShowsState from "./context/showsState";
import View from "./components/View";
import ShowInfo from "./components/ShowInfo";

function App() {
  return (
    <ShowsState>
      <Router>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/show/:id" element={<ShowInfo />} />
        </Routes>
      </Router>
    </ShowsState>
  )
}

export default App

