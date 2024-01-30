import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const PrivateRouter = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
