import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";

import FlightList from "./components/FlightResults";
import FlightDetails from "./components/FlightDetails";
import Success from "./components/common/Success";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/details/:id" element={<FlightDetails />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
