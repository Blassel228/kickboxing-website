import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { routerKeys } from "../Constants/routerKeys.tsx";
import { JSX } from "react";
import HomePage from "../Pages/HomePage.tsx";
import AboutPage from "../Pages/AboutPage.tsx";
import AchievementsPage from "../Pages/AchievementsPage.tsx";
import GalleryPage from "../Pages/GalleryPage.tsx";
import MotionTestComponent2 from "./TestComponent2.tsx";
import OfferPage from "../Pages/OfferPage.tsx";
import MediaPage from "../Pages/MediaPage.tsx";
import { AnimatePresence } from "framer-motion";
import MotionTestComponent from "./TestComponent.tsx";
import Contact from "../Pages/ContactPage.tsx";
import ContactPage from "../Pages/ContactPage.tsx";

export default function Routers(): JSX.Element {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to={routerKeys.homePage} replace />} />
        <Route path={routerKeys.homePage} element={<HomePage />} />
        <Route path={routerKeys.aboutPage} element={<AboutPage />} />
        <Route path={routerKeys.achievementsPage} element={<AchievementsPage />} />
        <Route path={routerKeys.galleryPage} element={<GalleryPage />} />
        <Route path={routerKeys.offerPage} element={<OfferPage />} />
        <Route path={routerKeys.mediaPage} element={<MediaPage />} />
        <Route path={routerKeys.contactPage} element={<ContactPage />} />
        <Route path="/test2" element={<MotionTestComponent2 />} />
        <Route path="/test1" element={<MotionTestComponent />} />
      </Routes>
    </AnimatePresence>
  );
}
