import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import About from '@/components/about';
import Cta from '@/components/cta';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Cta />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
