import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import { NavBar } from "../components/NavBar/NavBar";
import CreateAcademy from "../pages/academies/CreateAcademy";
import DetailAcademy from "../pages/academies/DetailAcademy";
import ListAcademies from "../pages/academies/ListAcademies";
import DetailDancer from "../pages/dancers/DetailDancer";
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
        <Route path="/detail-dancer" element={<DetailDancer />} />
        <Route path="/list-academies" element={<ListAcademies />} />
        <Route path="/create-academy" element={<CreateAcademy />} />
        <Route path="/detail-academy" element={<DetailAcademy />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  </>
);

export default ProtectedRoutes;
