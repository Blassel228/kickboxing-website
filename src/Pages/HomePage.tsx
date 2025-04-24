import HeroSection from "../Components/HeroSection.tsx";
import Header from "../Components/Header.tsx";
import Column from "../Components/Column.tsx";
import WinningSection from "../Components/WinningSection.tsx";
import VideoBackgroundSection from "../Components/VideoBackgroundSection.tsx";
import HistorySection from "../Components/HistorySection.tsx";

const HomePage = () => {
  return (
    <>
    <Header />
    <Column>
      <HeroSection />
      <WinningSection />
      <VideoBackgroundSection />
      <HistorySection />
    </Column>
    </>
  );
};

export default HomePage;