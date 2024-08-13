import Header from "@/shared/widgets/header";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benefits";
import FeatureHighlight from "./features/feature.highlight";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
    </div>
  )
}

export default Home;
