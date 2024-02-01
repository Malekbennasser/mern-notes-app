import Home from "./pages/home/index.jsx";
import Register from "./pages/register/index.jsx";
import Login from "./pages/login/index.jsx";
import Navbar from "./components/navbar.jsx";
import Notes from "./pages/Notes/index.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRouter from "./utils/PrivateRouter.jsx";
import { useAuth } from "./contexts/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateNote from "./pages/CreateNote/index.jsx";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/create" element={<CreateNote />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </>
  );
};

export default App;
