import Agents from "./home/Agents";
import BeAgent from "./home/BeAgent";
import Blogs from "./home/Blogs";
import Category from "./home/Category";
import CustomerFeedbacks from "./home/CustomerFeedbacks";
import RecentHouses from "./home/HomeTypes/RecentHouses";
import MobileCategory from "./home/MobileCategory";
import MobileSearch from "./home/MobileSearch";
import Neighborhoods from "./home/Neighborhoods";
import Services from "./home/Services";
import { Slider } from "./home/Slider";
import WhoAreWe from "./home/WhoAreWe";

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