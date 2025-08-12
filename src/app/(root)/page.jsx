import Agents from "./Home/Agents";
import BeAgent from "./Home/BeAgent";
import Blogs from "./Home/Blogs";
import Category from "./Home/Category";
import CustomerFeedbacks from "./Home/CustomerFeedbacks";
import RecentHouses from "./Home/HomeTypes/RecentHouses";
import MobileCategory from "./Home/MobileCategory";
import MobileSearch from "./Home/MobileSearch";
import Neighborhoods from "./Home/Neighborhoods";
import Services from "./Home/Services";
import { Slider } from "./Home/Slider";
import WhoAreWe from "./Home/WhoAreWe";

export default function Home() {
  return (
    <>
      <Slider />
      <Category />
      <MobileSearch />
      <MobileCategory />
      <RecentHouses houseType="Ən son siyahıya alınmış əmlaklar" />
      <RecentHouses houseType="Satılıq əmlaklar" />
      <RecentHouses houseType="Kirayə evlər" />
      <Neighborhoods />
      <Services />
      <BeAgent />
      <WhoAreWe />
      <div className="max-[431px]:hidden">
        <Agents />
      </div>
      <Blogs />
      <CustomerFeedbacks />
    </>
  );
}