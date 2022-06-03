import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import { NavBar } from "../components/NavBar/NavBar";
const CreateDancers = lazy(() => import("../pages/dancers/CreateDancers"));
const ListDancers = lazy(() => import("../pages/dancers/ListDancers"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

const ProtectedRoutes = () => (
  <>
    <NavBar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-dancer" element={<CreateDancers />} />
        <Route path="/list-dancer" element={<ListDancers />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  </>
);

export default ProtectedRoutes;
