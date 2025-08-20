import { lazy, Suspense } from "react";

import Spinner from "../../ui/Spinner";
import Title from "../Title";
const FigureCard = lazy(() => import("../figureCard"));

function HighlightSection() {
  return (
    <section>
      <Title title="Destaque Semanal" />
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <FigureCard
            id={9}
            image="/assets/img/macan.png"
            path="/cars"
            className="col-span-2 md:col-span-2 lg:!h-auto"
          />
        </Suspense>

        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <FigureCard
            id={9}
            image="/assets/img/text macan.png"
            path="/cars"
            className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 lg:!h-auto bg-dark"
          />
        </Suspense>
      </main>
    </section>
  );
}

export default HighlightSection;
