import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "../page/Home";

export default function Router() {
  return (
    <div className="w-[1920px] mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
