import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import FallbackSpinner from "../components/layout/FallbackSpinner";
import CarPages from "../pages/CarPages";
import Layout from "./layout.routes";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const CarsPages = lazy(() => import("../pages/CarsPages"));
const AnnouncePages = lazy(() => import("../pages/AnnouncePages"));

function UseRoutes() {
  return (
    <Suspense fallback={<FallbackSpinner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPages />} />
          <Route path="/cars/:id" element={<CarPages />} />
          <Route path="/announce" element={<AnnouncePages />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default UseRoutes;
