import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import LayoutHomePage from './components/Layout/LayoutHomePage'
import LayoutNewsPage from './components/Layout/LayoutNewsPage'
import CookieConsent from './components/UI/CookieConsent'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const NewsPost = lazy(() => import('./pages/NewsPost'))
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'))
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'))
const DrainService = lazy(() => import('./pages/services/DrainService'))
const EmergencyService = lazy(() => import('./pages/services/EmergencyService'))
const FixtureService = lazy(() => import('./pages/services/FixtureService'))
const PipeService = lazy(() => import('./pages/services/PipeService'))
const RemodelingService = lazy(() => import('./pages/services/RemodelingService'))
const WaterHeaterService = lazy(() => import('./pages/services/WaterHeaterService'))

import LoadingSpinner from './components/UI/LoadingSpinner'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </BrowserRouter>
        <CookieConsent />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
