import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NewsPost from "./pages/NewsPost";
import SearchResultsPage from "./pages/SearchResultsPage";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import DrainService from "./pages/services/DrainService";
import EmergencyService from "./pages/services/EmergencyService";
import FixtureService from "./pages/services/FixtureService";
import RemodelingService from "./pages/services/RemodelingService";
import WaterHeaterService from "./pages/services/WaterHeaterService";
import PipeService from "./pages/services/PipeService";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/news"
                element={<NewsPage />}
              />
              <Route
                path="/news/:slug"
                element={<NewsPost />}
              />
              <Route
                path="/news/category/:category"
                element={<NewsPage />}
              />
              <Route
                path="/news/tag/:tag"
                element={<NewsPage />}
              />
              <Route
                path="/search"
                element={<SearchResultsPage />}
              />
              <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
              />
              <Route
                path="/terms-of-service"
                element={<TermsOfService />}
              />
              <Route
                path="/cookie-policy"
                element={<CookiePolicy />}
              />
              <Route
                path="/services/emergency"
                element={<EmergencyService />}
              />
              <Route
                path="/services/drains"
                element={<DrainService />}
              />
              <Route
                path="/services/water-heaters"
                element={<WaterHeaterService />}
              />
              <Route
                path="/services/remodeling"
                element={<RemodelingService />}
              />
              <Route
                path="/services/pipes"
                element={<PipeService />}
              />
              <Route
                path="/services/fixtures"
                element={<FixtureService />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
