import Footer from '@/components/footer';
import Header from '@/components/header';
import SwpPage from '@/components/swp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Systematic Withdrawal Plan - FXVibe Replicator',
  description: 'Understand our Systematic Withdrawal Plan (SWP) for disciplined and consistent cash flow from your investments.',
};

export default function SWP() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SwpPage />
      </main>
      <Footer />
    </div>
  );
}
