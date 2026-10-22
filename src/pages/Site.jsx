import { Hero } from '../sections/Hero.jsx';
import { Customs } from '../sections/Customs.jsx';
import { Logistics } from '../sections/Logistics.jsx';
import { Storage } from '../sections/Storage.jsx';
import { Services } from '../sections/Services.jsx';

/** Ana sayfa: yalnızca hizmetler ve aksiyon. Marka tarihçesi /hakkimizda sayfasındadır. */
export function Site() {
  return (
    <main>
      <Hero />
      <Customs />
      <Logistics />
      <Storage />
      <Services />
    </main>
  );
}
