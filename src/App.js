import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DrawerMain } from "./components/DrawerMain";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogsSection } from "./pages/BlogsSection";
import { AutomationPython } from "./pages/Blog/AutomationPython";
import { HistorySection } from "./pages/HistorySection";
import { ContactSection } from "./pages/ContactSection";
import { SkillSection } from "./pages/SkillSection.js";

import { ThemeProviderCostom } from "./theme";

export default function App() {
  const OnePage = (props) => (
    <>
      <Home />
      <SkillSection />
      <HistorySection />
      <BlogsSection />
      <ContactSection />
    </>
  );
  return (
    <>
      <ThemeProviderCostom>
        <Routes>
          <Route path="/" element={<DrawerMain />}>
            <Route index element={<OnePage />} />
          </Route>
          <Route path="blog">
            <Route index element={<Blog />} />
            <Route
              path="boost-your-productivity-with-keyboard-automation-using-python"
              element={<AutomationPython />}
            />
          </Route>
        </Routes>
        {/* <MyApp /> */}
      </ThemeProviderCostom>
    </>
  );
}
