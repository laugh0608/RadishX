import { HomeCollection } from "../components/home/HomeCollection";
import { HomeHero } from "../components/home/HomeHero";
import { HomeMascot } from "../components/home/HomeMascot";

export function HomePage() {
  return (
    <div className="home2-page">
      <HomeHero />
      <HomeCollection />
      <HomeMascot />
    </div>
  );
}
