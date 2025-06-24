
import Footer from '@/components/footer';
import Header from '@/components/header';
import EvaluationPage from '@/components/evaluation';

export default function Evaluation() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <EvaluationPage />
      </main>
      <Footer />
    </div>
  );
}
