import Header from "./components/Header";
import Hero from "./components/Hero";
import { KuantamPoints, HowItWorks, KeyFeatures } from "./components/Sections";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import ScrollToTop from "./components/ScrollToTop";
import useReveal from "./hooks/useReveal";
import useFx from "./hooks/useFx";
import config from "./config";

export default function App() {
  useReveal();
  useFx(config);
  return (
    <div className="app" data-v={config.id}>
      <a className="skip" href="#main">Skip to content</a>
      {config.progress && <Progress />}
      <Header />
      <main id="main">
        <Hero />
        <KuantamPoints />
        <HowItWorks />
        <KeyFeatures />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}