import About from './components/About';
import AllInOne from './components/AllInOne';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Quote from './components/Quote';
import Support from './components/Support'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllInOne />
      <About />
      <Support />
      <Pricing />
      <FAQ />
      <Quote />
      <Footer />
    </>
  );
}

export default App;
