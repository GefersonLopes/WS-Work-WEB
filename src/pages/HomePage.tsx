import AnnounceSection from "../components/layout/AnnounceSection";
import HeroBanner from "../components/layout/Banner";
import HighlightSection from "../components/layout/HighlightSection";
import ModelsSection from "../components/layout/ModelsSection";

function HomePage() {
  return (
    <section>
      <HeroBanner />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModelsSection />
        <HighlightSection />
        <AnnounceSection />
      </main>
    </section>
  );
}

export default HomePage;
