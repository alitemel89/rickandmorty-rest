import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Episode from "./pages/episode/Episode";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/episode/:id`} element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
