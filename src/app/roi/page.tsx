
import Footer from '@/components/footer';
import Header from '@/components/header';
import RoiPage from '@/components/roi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return on Investment (ROI) - FXVibe Replicator',
  description: 'Understand how Return on Investment (ROI) is calculated in our AI Trading System.',
};

export default function ROI() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <RoiPage />
      </main>
      <Footer />
    </div>
  );
}
