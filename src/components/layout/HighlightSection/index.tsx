import { lazy, Suspense } from "react";

import Title from "../Title";
const FigureCard = lazy(() => import("../figureCard"));

function HighlightSection() {
  return (
    <section>
      <Title title="Destaque Semanal" />
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Suspense fallback={<div>Carregando...</div>}>
          <FigureCard
            id={1}
            image="/public/assets/img/macan.png"
            path="/models"
            className="col-span-2 md:col-span-2 lg:!h-auto"
          />
        </Suspense>

        <Suspense fallback={<div>Carregando...</div>}>
          <FigureCard
            id={2}
            image="/public/assets/img/text macan.png"
            path="/models"
            className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 lg:!h-auto bg-dark"
          />
        </Suspense>
      </main>
    </section>
  );
}

export default HighlightSection;
