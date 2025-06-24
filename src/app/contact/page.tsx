
import Footer from '@/components/footer';
import Header from '@/components/header';
import ContactPage from '@/components/contact';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
