import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import FallbackSpinner from "../components/layout/FallbackSpinner";
import Layout from "./layout.routes";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const CarsPages = lazy(() => import("../pages/CarsPages"));

function UseRoutes() {
  return (
    <Suspense fallback={<FallbackSpinner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPages />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default UseRoutes;
