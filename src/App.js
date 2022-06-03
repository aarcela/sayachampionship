import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoutes from "./routes/ProtectedRoute";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));

const App = () => {
  return (
    <div className="App-header">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="*"
            element={
              <PrivateRoute>
                <ProtectedRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
