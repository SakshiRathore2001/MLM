
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Cta from '@/components/cta';
import About from '@/components/about';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Cta />
        <About />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
