
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Academics from '@/components/Academics';
import Gallery from '@/components/Gallery';
import Ceremonials from '@/components/Ceremonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Academics />
      <Gallery />
      <Ceremonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
