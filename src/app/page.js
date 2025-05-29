import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Carousel />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
