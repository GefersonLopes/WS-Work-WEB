import AnnounceSection from "../components/layout/AnnounceSection";
import HeroBanner from "../components/layout/Banner";
import HighlightSection from "../components/layout/HighlightSection";
import ModelsSection from "../components/layout/ModelsSection";

// const CardItems = lazy(() => import("../components/layout/CardItems"));
// const MainNews = lazy(() => import("../components/layout/MainNews"));

function HomePage() {
  // const {
  //   data,
  //   isLoading,
  //   isError,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  // } = useInfiniteCars();

  // console.log("data", data);

  return (
    <div className="">
      <HeroBanner />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModelsSection />

        <HighlightSection />

        <AnnounceSection />
      </main>

      {/* {hasNextPage && (
          <div className="mt-8 w-full flex items-center justify-center">
            <Button
              type="button"
              className="!bg-transparent border border-secondary !text-secondary py-2 px-5 rounded-none cursor-pointer"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Carregando…" : "Carregar mais..."}
            </Button>
          </div>
        )} */}
    </div>
  );
}

export default HomePage;
