import TitlePage from "./pages/TitlePage";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="Home" element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Help" element={<Help />} />
              <Route path="Setting" element={<Setting />} />
              <Route path="Chat" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
      <TitlePage />
    </div>
  );
}

export default App;
