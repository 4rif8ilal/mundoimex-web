import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ModalProvider } from './components/Modal.jsx';
import { CareerForm, ContactContent, EgumrukContent, QuoteForm } from './components/ModalContents.jsx';
import { Site } from './pages/Site.jsx';
import { AboutPage } from './pages/AboutPage.jsx';

const modals = {
  iletisim: {
    kicker: 'Bize ulaşın',
    title: 'İletişim',
    size: 'lg',
    render: () => <ContactContent />,
  },
  teklif: {
    kicker: 'Hızlı dönüş',
    title: 'Teklif formu',
    render: () => <QuoteForm />,
  },
  kariyer: {
    kicker: 'Ekibimize katılın',
    title: 'Kariyer başvurusu',
    render: () => <CareerForm />,
  },
  egumruk: {
    kicker: 'Dış ticaretin dijital geleceği',
    title: 'E-Gümrük uygulamaları',
    size: 'lg',
    render: () => <EgumrukContent />,
  },
};

// Sayfalar hash ile ayrılır: "#/hakkimizda" ayrı sayfa; diğer her hash (örn. "#gumruk") ana sayfadaki bölümdür.
const readRoute = () => (window.location.hash === '#/hakkimizda' ? 'hakkimizda' : 'home');

export default function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onHash = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Sayfa değişince: yeni sayfada tepeye çık; ana sayfaya bölüm bağlantısıyla dönüldüyse o bölüme in.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const target = route === 'home' && id && !id.startsWith('/') ? document.getElementById(id) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [route]);

  return (
    <ModalProvider modals={modals}>
      <Header />
      {route === 'hakkimizda' ? <AboutPage /> : <Site />}
      <Footer />
    </ModalProvider>
  );
}
