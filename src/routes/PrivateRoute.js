import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";

function PrivateRoute({ children }) {
  const [user] = useAuthState(auth);

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
