import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <p>This is a simple page built with Next.</p>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
