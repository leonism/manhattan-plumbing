import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import LayoutHomePage from './components/Layout/LayoutHomePage'
import LayoutNewsPage from './components/Layout/LayoutNewsPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import NewsPost from './pages/NewsPost'
import SearchResultsPage from './pages/SearchResultsPage'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import CookiePolicy from './pages/legal/CookiePolicy'
import DrainService from './pages/services/DrainService'
import EmergencyService from './pages/services/EmergencyService'
import FixtureService from './pages/services/FixtureService'
import PipeService from './pages/services/PipeService'
import RemodelingService from './pages/services/RemodelingService'
import WaterHeaterService from './pages/services/WaterHeaterService'
import CookieConsent from './components/UI/CookieConsent'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutHomePage>
                  <HomePage />
                </LayoutHomePage>
              }
            />
            <Route
              path="/news"
              element={
                <LayoutNewsPage>
                  <NewsPage />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/news/:slug"
              element={
                <LayoutNewsPage>
                  <NewsPost />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/news/category/:category"
              element={
                <LayoutNewsPage>
                  <NewsPage />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/news/tag/:tag"
              element={
                <LayoutNewsPage>
                  <NewsPage />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/search"
              element={
                <LayoutNewsPage>
                  <SearchResultsPage />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <LayoutNewsPage>
                  <PrivacyPolicy />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <LayoutNewsPage>
                  <TermsOfService />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <LayoutNewsPage>
                  <CookiePolicy />
                </LayoutNewsPage>
              }
            />

            <Route
              path="/services/drain-service"
              element={
                <LayoutNewsPage>
                  <DrainService />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/services/emergency-service"
              element={
                <LayoutNewsPage>
                  <EmergencyService />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/services/fixture-service"
              element={
                <LayoutNewsPage>
                  <FixtureService />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/services/pipe-service"
              element={
                <LayoutNewsPage>
                  <PipeService />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/services/remodeling-service"
              element={
                <LayoutNewsPage>
                  <RemodelingService />
                </LayoutNewsPage>
              }
            />
            <Route
              path="/services/water-heater-service"
              element={
                <LayoutNewsPage>
                  <WaterHeaterService />
                </LayoutNewsPage>
              }
            />
          </Routes>
        </BrowserRouter>
        <CookieConsent />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
