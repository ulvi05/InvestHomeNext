import CenterMode from "./Home/CenterMode";
import RecentHouses from "./Home/HomeTypes/RecentHouses";
import { Slider } from "./Home/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <CenterMode />
      <RecentHouses />
    </div>
  );
}
