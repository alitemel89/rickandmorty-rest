import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import CharacterDetails from "./pages/CharacterDetails";
import Episode from "./pages/Episode";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<CharacterDetails />} />
        <Route path={`/episode/:id`} element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
