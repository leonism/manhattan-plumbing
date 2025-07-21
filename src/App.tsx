import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SkipToContent from './components/UI/SkipToContent'
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
const CookiesPolicy = lazy(() => import('./pages/legal/CookiesPolicy'))
const DrainService = lazy(() => import('./pages/services/DrainService'))
const EmergencyService = lazy(() => import('./pages/services/EmergencyService'))
const FixtureService = lazy(() => import('./pages/services/FixtureService'))
const PipeService = lazy(() => import('./pages/services/PipeService'))
const RemodelingService = lazy(() => import('./pages/services/RemodelingService'))
const WaterHeaterService = lazy(() => import('./pages/services/WaterHeaterService'))
const LocationPage = lazy(() => import('./pages/LocationPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

import LoadingSpinner from './components/UI/LoadingSpinner'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SkipToContent />
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
                path="/news/:slug"
                element={
                  <LayoutNewsPage
                    title="News Post"
                    description="Read our latest plumbing news and updates"
                    ogTitle="News Post"
                    ogDescription="Read our latest plumbing news and updates"
                    ogImage="/images/manhattan-plumber.png"
                    canonical="https://manhattan-plumbing.pages.dev/news"
                    ogUrl="https://manhattan-plumbing.pages.dev/news"
                  >
                    <NewsPost />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/news"
                element={
                  <LayoutNewsPage
                    title="News"
                    description="Stay updated with the latest plumbing news and industry insights"
                    ogTitle="Plumbing News & Updates"
                    ogDescription="Stay updated with the latest plumbing news and industry insights"
                    ogImage="/images/manhattan-plumber.png"
                    canonical="https://manhattan-plumbing.pages.dev/news"
                  >
                    <NewsPage />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/news/page/:page"
                element={
                  <LayoutNewsPage
                    title="News"
                    description="Stay updated with the latest plumbing news and industry insights"
                    ogTitle="Plumbing News & Updates"
                    ogDescription="Stay updated with the latest plumbing news and industry insights"
                    ogImage="/images/manhattan-plumber.png"
                    canonical="https://manhattan-plumbing.pages.dev/news"
                  >
                    <NewsPage />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/news/category/:category/:page?"
                element={
                  <LayoutNewsPage
                    title="Category News"
                    description="Browse our plumbing news by category"
                    ogTitle="News Post"
                    ogDescription="Read our latest plumbing news and updates"
                    ogImage="/images/manhattan-plumber.png"
                    canonical="https://manhattan-plumbing.pages.dev/news"
                  >
                    <NewsPage />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/news/tag/:tag/:page?"
                element={
                  <LayoutNewsPage
                    title="Tagged News"
                    description="Browse our plumbing news by tag"
                    ogTitle="Tagged News"
                    ogDescription="Browse our plumbing news by tag"
                    ogImage="/images/manhattan-plumber.png"
                    canonical="https://manhattan-plumbing.pages.dev/news"
                  >
                    <NewsPage />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/search"
                element={
                  <LayoutNewsPage
                    title="Search Results"
                    description="Search results for plumbing services and information"
                    ogTitle="Search Results"
                    ogDescription="Search results for plumbing services and information"
                    ogImage="/images/og-search.jpg"
                    canonical="https://manhattan-plumbing.pages.dev/search"
                  >
                    <SearchResultsPage />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <LayoutNewsPage
                    title="Privacy Policy"
                    description="Our privacy policy and data protection practices"
                    ogTitle="Privacy Policy"
                    ogDescription="Our privacy policy and data protection practices"
                    ogImage="/images/og-privacy.jpg"
                    canonical="https://manhattan-plumbing.pages.dev/privacy-policy"
                  >
                    <PrivacyPolicy />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/terms-of-service"
                element={
                  <LayoutNewsPage
                    title="Terms of Service"
                    description="Our terms of service and usage conditions"
                    ogTitle="Terms of Service"
                    ogDescription="Our terms of service and usage conditions"
                    ogImage="/images/og-terms.jpg"
                    canonical="https://manhattan-plumbing.pages.dev/terms-of-service"
                  >
                    <TermsOfService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/cookies-policy"
                element={
                  <LayoutNewsPage
                    title="Cookie Policy | Manhattan Plumbing"
                    description="Learn about how Manhattan Plumbing uses cookies and similar technologies on our website."
                    canonical="https://manhattan-plumbing.pages.dev/cookie-policy"
                    ogTitle="Cookie Policy | Manhattan Plumbing"
                    ogDescription="Learn about how Manhattan Plumbing uses cookies and similar technologies on our website."
                    ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
                    ogUrl="https://manhattan-plumbing.pages.dev/cookie-policy"
                  >
                    <CookiesPolicy />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/services/drain-service"
                element={
                  <LayoutNewsPage
                    title="Drain Cleaning Services | Manhattan Plumbing"
                    description="Fast and effective drain cleaning services in Manhattan. We clear clogged drains in kitchens, bathrooms, and sewer lines using the latest technology."
                    canonical="https://manhattan-plumbing.pages.dev/services/drain-service"
                    ogTitle="Drain Cleaning Services | Manhattan Plumbing"
                    ogDescription="Fast and effective drain cleaning services in Manhattan. We clear clogged drains in kitchens, bathrooms, and sewer lines using the latest technology."
                    ogImage="/images/og-services.jpg"
                    ogUrl="https://manhattan-plumbing.pages.dev/services/drain-service"
                  >
                    <DrainService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/services/emergency-service"
                element={
                  <LayoutNewsPage
                    title="24/7 Emergency Plumbing Services | Manhattan Plumbing"
                    description="Immediate response for plumbing emergencies in Manhattan. Our certified plumbers are available 24/7 for burst pipes, sewer backups, and more."
                    canonical="https://manhattan-plumbing.pages.dev/services/emergency-service"
                    ogTitle="24/7 Emergency Plumbing Services | Manhattan Plumbing"
                    ogDescription="Immediate response for plumbing emergencies in Manhattan. Our certified plumbers are available 24/7 for burst pipes, sewer backups, and more."
                    ogImage="/images/og-services.jpg"
                    ogUrl="https://manhattan-plumbing.pages.dev/services/emergency-service"
                  >
                    <EmergencyService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/services/fixture-service"
                element={
                  <LayoutNewsPage
                    title="Fixture Installation & Repair | Manhattan Plumbing"
                    description="Expert plumbing fixture installation and repair in Manhattan. We specialize in faucets, showers, and water-efficient fixtures."
                    canonical="https://manhattan-plumbing.pages.dev/services/fixture-service"
                    ogTitle="Fixture Installation & Repair | Manhattan Plumbing"
                    ogDescription="Expert plumbing fixture installation and repair in Manhattan. We specialize in faucets, showers, and water-efficient fixtures."
                    ogImage="/images/og-services.jpg"
                    ogUrl="https://manhattan-plumbing.pages.dev/services/fixture-service"
                  >
                    <FixtureService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/services/pipe-service"
                element={
                  <LayoutNewsPage
                    title="Pipe Repair & Replacement | Manhattan Plumbing"
                    description="Durable solutions for leaky, corroded, or damaged pipes in Manhattan. We offer advanced leak detection and trenchless pipe replacement."
                    canonical="https://manhattan-plumbing.pages.dev/services/pipe-service"
                    ogTitle="Pipe Repair & Replacement | Manhattan Plumbing"
                    ogDescription="Durable solutions for leaky, corroded, or damaged pipes in Manhattan. We offer advanced leak detection and trenchless pipe replacement."
                    ogImage="/images/og-services.jpg"
                    ogUrl="https://manhattan-plumbing.pages.dev/services/pipe-service"
                  >
                    <PipeService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/services/remodeling-service"
                element={
                  <LayoutNewsPage
                    title="Bathroom Remodeling | Manhattan Plumbing"
                    description="Transform your bathroom with our premium remodeling services in Manhattan. We offer custom designs and luxury fixtures."
                    canonical="https://manhattan-plumbing.pages.dev/services/remodeling-service"
                    ogTitle="Bathroom Remodeling | Manhattan Plumbing"
                    ogDescription="Transform your bathroom with our premium remodeling services in Manhattan. We offer custom designs and luxury fixtures."
                    ogImage="/images/og-services.jpg"
                    ogUrl="https://manhattan-plumbing.pages.dev/services/remodeling-service"
                  >
                    <RemodelingService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/services/water-heater-service"
                element={
                  <LayoutNewsPage
                    title="Water Heater Services | Manhattan Plumbing"
                    description="Reliable water heater installation, repair, and maintenance in Manhattan. We offer 24/7 emergency service and a 10-year guarantee."
                    canonical="https://manhattan-plumbing.pages.dev/services/water-heater-service"
                    ogTitle="Water Heater Services | Manhattan Plumbing"
                    ogDescription="Reliable water heater installation, repair, and maintenance in Manhattan. We offer 24/7 emergency service and a 10-year guarantee."
                    ogImage="/images/og-services.jpg"
                    ogUrl="https://manhattan-plumbing.pages.dev/services/water-heater-service"
                  >
                    <WaterHeaterService />
                  </LayoutNewsPage>
                }
              />
              <Route
                path="/location"
                element={
                  <LayoutNewsPage
                    title="Our Service Area | Manhattan Plumbing"
                    description="Explore the areas in Manhattan where we provide our expert plumbing services. Find reliable plumbers near you."
                    canonical="https://manhattan-plumbing.pages.dev/location"
                    ogTitle="Our Service Area | Manhattan Plumbing"
                    ogDescription="Explore the areas in Manhattan where we provide our expert plumbing services. Find reliable plumbers near you."
                    ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
                    ogUrl="https://manhattan-plumbing.pages.dev/location"
                  >
                    <LocationPage />
                  </LayoutNewsPage>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <CookieConsent />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
