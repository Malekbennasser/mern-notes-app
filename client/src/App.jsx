import Home from "./pages/home/index.jsx";
import Register from "./pages/register/index.jsx";
import Login from "./pages/login/index.jsx";
import Navbar from "./components/navbar.jsx";
import Notes from "./pages/Notes/index.jsx";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./utils/PrivateRouter.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/notes" element={<Notes />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
