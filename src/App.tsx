import LogoSection from "./components/LogoSection";
import Navbar from "./components/NavBar";
import ExperienceSection from "./components/sections/ExperienceSection";
import FeatureCards from "./components/sections/FeatureCards";
import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  );
};
export default App;
