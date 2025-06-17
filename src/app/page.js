import Carousel from "./components/ui/Carousel/Carousel";
import GridLayout from "./components/Cards/Cards";
export default function Home() {
  return (
    <main>
      <section>
        <Carousel />
        <div className="max-w-7xl mx-auto">
          <GridLayout />
        </div>
      </section>
    </main>
  );
}
