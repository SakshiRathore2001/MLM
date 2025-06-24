
import Footer from '@/components/footer';
import Header from '@/components/header';
import About from '@/components/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - FXVibe Replicator',
  description: 'Learn about our Assets Under Management (AUM), security, and performance.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
