import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Landing page components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Quiz from "./components/Quiz";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Curriculum from "./components/Curriculum";
import GroupPayLandingSection from "./components/grouppay/GroupPayLandingSection";
import NursingMeritCupSection from "./components/NursingMeritCupSection";

// SEO pages
import SeoFooter from "./components/seo/SeoFooter";
import NCKExamRevisionPage from "./components/seo/NCKExamRevisionPage";
import NCKExamQuestionsPage from "./components/seo/NCKExamQuestionsPage";
import NCKPastPapersPage from "./components/seo/NCKPastPapersPage";
import KRCHNRevisionPage from "./components/seo/KRCHNRevisionPage";
import NCKExamPreparationPage from "./components/seo/NCKExamPreparationPage";
import NursingRevisionKenyaPage from "./components/seo/NursingRevisionKenyaPage";
import MedraeNursingMeritCupPage from "./components/seo/MedraeNursingMeritCupPage";
import PodcastSection from "./components/PodcastSection";

// ============================================================
// HOME PAGE (your existing landing page content)
// ============================================================
function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const navigate = useNavigate();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    if (id === "privacy" || id === "terms") {
      setCurrentPage(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setCurrentPage("home");

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const goToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "privacy":
        return <Privacy scrollToSection={scrollToSection} />;
      case "terms":
        return <Terms scrollToSection={scrollToSection} />;
      default:
        return (
          <main>
            <Hero scrollToSection={scrollToSection} />
            <About scrollToSection={scrollToSection} />
            <Quiz />
            <Features />
            <PodcastSection />
            <Curriculum scrollToSection={scrollToSection} />

            {/* 🆕 Merit Cup section */}
            <section id="merit-cup">
              <NursingMeritCupSection />
            </section>

            <GroupPayLandingSection />
            <CTA />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-#020617 dark:text-white">


      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      {renderPage()}

      {currentPage === "home" && (
        <Footer scrollToSection={scrollToSection} />
      )}

      {(currentPage === "privacy" || currentPage === "terms") && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={goToHome}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-sm font-medium hidden sm:inline">
              Back to Home
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// SEO PAGE WRAPPER — adds the shared footer automatically
// ============================================================
function SeoPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

    </>
  );
}

// ============================================================
// APP WITH ROUTER
// ============================================================
export default function App() {
  return (

    <Routes>
      {/* Landing page */}
      <Route path="/" element={<HomePage />} />

      {/* SEO pages */}
      <Route
        path="/nck-exam-revision"
        element={<SeoPageWrapper><NCKExamRevisionPage /></SeoPageWrapper>}
      />
      <Route
        path="/nck-exam-questions"
        element={<SeoPageWrapper><NCKExamQuestionsPage /></SeoPageWrapper>}
      />
      <Route
        path="/nck-past-papers"
        element={<SeoPageWrapper><NCKPastPapersPage /></SeoPageWrapper>}
      />
      <Route
        path="/krchn-revision"
        element={<SeoPageWrapper><KRCHNRevisionPage /></SeoPageWrapper>}
      />
      <Route
        path="/nck-exam-preparation"
        element={<SeoPageWrapper><NCKExamPreparationPage /></SeoPageWrapper>}
      />
      <Route
        path="/nursing-revision-kenya"
        element={<SeoPageWrapper><NursingRevisionKenyaPage /></SeoPageWrapper>}
      />
      <Route
        path="/medrae-nursing-merit-cup"
        element={<SeoPageWrapper><MedraeNursingMeritCupPage /></SeoPageWrapper>}
      />

      {/* Fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>

  );
}