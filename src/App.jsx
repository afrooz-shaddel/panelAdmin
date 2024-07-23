import { useState } from "react";
import "./App.css";
import Nav from "./component/NavBar/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import TagMangement from "./pages/TAGSMANAGEMENT/TagMangement.jsx";
import UserMangement from "./pages/USER MANAGEMENT/UserMangement";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/tag" element={<TagMangement />} />
        <Route path="/user" element={<UserMangement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
