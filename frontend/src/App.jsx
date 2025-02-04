import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { Preheader } from "./components/Preheader/Preheader";
import Index from "./views/index";
import DetailAnime from "./views/DetailAnime/DetailAnime";

const Layout = ({ children, showAbout = true }) => {
  return (
    <>
      <Preheader />
      <Header />
      {children}
      {showAbout && <About />}
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
          <Layout showAbout={false}>
            <Index />
          </Layout>
        }
      />
      <Route
        path="/anime/:id"
        element={
          <Layout showAbout={false}>
            <DetailAnime />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
