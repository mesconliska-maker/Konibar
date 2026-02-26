import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { WeeklyMenuPage } from "./pages/WeeklyMenuPage";
import { MenuPage } from "./pages/MenuPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { ReservationPage } from "./pages/ReservationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "tydeni-menu", Component: WeeklyMenuPage },
      { path: "jidelni-listek", Component: MenuPage },
      { path: "galerie", Component: GalleryPage },
      { path: "kontakt", Component: ContactPage },
      { path: "rezervace", Component: ReservationPage },
    ],
  },
]);
