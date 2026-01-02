// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const Index = () => {
//   const { isAuthenticated } = useAuth();
//   return <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />;
// };

// export default Index;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default Index;
