import HeroSection from "@/components/Home/HeroSection";
import { GridSection } from "@/components/Home/GridSection";

export default async function Home() {
  return (
    <main className="">
      <HeroSection />
      <GridSection />
    </main>
  );
}
