import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LYNCDesktop from "./pages/LYNCDesktop";
import LYNCMobile from "./pages/LYNCMobile";
import FloorPattern from "./pages/FloorPattern";
import FloorPattern1 from "./pages/FloorPattern1";
import Background from "./pages/Background";
import Group from "./pages/Group";
import Group1 from "./pages/Group1";
import Group2 from "./pages/Group2";
import Grid1 from "./pages/Grid1";
import LYNCTablet from "./pages/LYNCTablet";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/lync-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/floor-pattern":
        title = "";
        metaDescription = "";
        break;
      case "/floor-pattern1":
        title = "";
        metaDescription = "";
        break;
      case "/background":
        title = "";
        metaDescription = "";
        break;
      case "/group":
        title = "";
        metaDescription = "";
        break;
      case "/group1":
        title = "";
        metaDescription = "";
        break;
      case "/group2":
        title = "";
        metaDescription = "";
        break;
      case "/grid":
        title = "";
        metaDescription = "";
        break;
      case "/lync-tablet":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LYNCDesktop />} />
      <Route path="/lync-mobile" element={<LYNCMobile />} />
      <Route path="/floor-pattern" element={<FloorPattern />} />
      <Route path="/floor-pattern1" element={<FloorPattern1 />} />
      <Route path="/background" element={<Background />} />
      <Route path="/group" element={<Group />} />
      <Route path="/group1" element={<Group1 />} />
      <Route path="/group2" element={<Group2 />} />
      <Route path="/grid" element={<Grid1 />} />
      <Route path="/lync-tablet" element={<LYNCTablet />} />
    </Routes>
  );
}
export default App;
