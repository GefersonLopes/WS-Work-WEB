import { lazy, Suspense } from "react";

const FigureCard = lazy(() => import("../figureCard"));
import Spinner from "../../ui/Spinner";
import Title from "../Title";

type Media = {
  id: number;
  name: string;
  image: string;
};

function MediasCard({
  items,
  path,
  title,
}: {
  items: Media[];
  path: string;
  title: string;
}) {
  return (
    <section aria-labelledby="modelos-heading" className="py-8 sm:py-12">
      <div>
        <Title title={title} />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <li key={item.id}>
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <Spinner />
                  </div>
                }
              >
                <FigureCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  path={path}
                />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MediasCard;
