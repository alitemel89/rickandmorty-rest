import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Episode from "./pages/episode/Episode";
import CharacterPage from "./pages/character/CharacterPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/episode/:id`} element={<Episode />} exact />
        <Route path={`/character/:id`} element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
