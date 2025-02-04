import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import { Preheader } from "./components/Preheader/Preheader";
import Index from "./views/index";
import DetailAnime from "./views/DetailAnime/DetailAnime"; // Sesuaikan path

// Komponen Layout agar Header & Footer tetap ada di semua halaman
const Layout = ({ children, showTestimonials = true }) => {
  return (
    <>
      <Preheader />
      <Header />
      {children}
      {showTestimonials && <Testimonials />}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HeroSection />
          </Layout>
        }
      />
      <Route
        path="/popular"
        element={
          <Layout>
            <Index />
          </Layout>
        }
      />
      <Route
        path="/anime/:id"
        element={
          <Layout showTestimonials={false}>
            <DetailAnime />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
