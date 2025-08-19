import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { footerSections } from "../utils/data/footer";

function Layout() {
  return (
    <main className="text-primary">
      <Header />
      <section className="w-full mx-auto mb-12">
        <Outlet />
      </section>
      <Footer
        logo="/assets/profile.jpg"
        sections={footerSections}
        socialLinks={[]}
        className="mt-auto"
      />
    </main>
  );
}

export default Layout;
