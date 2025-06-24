
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Cta from '@/components/cta';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Cta />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
