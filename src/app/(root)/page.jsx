import Agents from "./Home/Agents";
import BeAgent from "./Home/BeAgent";
import Blogs from "./Home/Blogs";
import CenterMode from "./Home/CenterMode";
import CustomerFeedbacks from "./Home/CustomerFeedbacks";
import RecentHouses from "./Home/HomeTypes/RecentHouses";
import Neighborhoods from "./Home/Neighborhoods";
import Services from "./Home/Services";
import { Slider } from "./Home/Slider";
import WhoAreWe from "./Home/WhoAreWe";

export default function Home() {
  return (
    <div>
      <Slider />
      <CenterMode />
      <RecentHouses houseType="Ən son siyahıya alınmış əmlaklar"/>
      <RecentHouses houseType="Satılıq əmlaklar"/>
      <RecentHouses houseType="Kirayə evlər"/>
      <Neighborhoods />
      <Services />
      <BeAgent />
      <WhoAreWe />
      <div className="max-[426px]:hidden">
        <Agents />
      </div>
      <Blogs />
      <CustomerFeedbacks />
    </div>
  );
}
