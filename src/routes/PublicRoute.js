import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";

function PublicRoute({ children }) {
  const [user, error] = useAuthState(auth);
  console.log(error);
  return !user ? children : <Navigate to="/dashboard" />;
}

export default PublicRoute;
