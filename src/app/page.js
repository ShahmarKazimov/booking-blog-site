import Carousel from "./components/ui/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import HeroSection from "./components/HeroSection/HeroSection";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <main className="flex flex-col">
      <header>
        <HeroSection />
      </header>

      <section aria-label="Featured Products">
        <Carousel />
      </section>

      <section aria-label="Product Grid" className="max-w-7xl mx-auto">
        <Cards />
      </section>
      <section>
        <Reviews />
      </section>
    </main>
  );
}
