// Metinler mundoimex.com'dan alınmıştır. Yazım hataları düzeltildi, tekrar eden maddeler
// birleştirildi, uzun maddeler gruplandı. Anlam değiştirilmedi.

export const company = {
  name: 'Mundoimex',
  legal: 'Mundoimex Gümrük Müşavirliği A.Ş.',
  tagline: 'Global Lojistik ve Gümrük Müşavirliği',
  slogan: 'Tam Zamanında',
  phone: '0 212 852 4639',
  fax: '0 212 852 4640',
  skype: 'mundoimex',
  email: 'info@mundoimex.com',
  address: [
    'Gökevler Mh. 2312 Sk. No:16-C',
    'Ginza Corner Plaza Kat:3 Daire: 43-44',
    'E-5 Karayolu Yan Yol Üzeri, Hadımköy Metrobüs Durağı',
    '34522 Esenyurt / İSTANBUL',
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Ginza+Corner+Plaza+Gökevler+Mh.+2312+Sk.+No:16-C+Esenyurt+İstanbul&hl=tr&z=16&output=embed',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Ginza+Corner+Plaza+Gökevler+Mh.+2312+Sk.+No:16-C+Esenyurt+İstanbul',
};

export const nav = [
  { label: 'Gümrük Çözümleri', href: '#gumruk' },
  { label: 'Lojistik Çözümleri', href: '#lojistik' },
  { label: 'Depolama', href: '#depolama' },
  { label: 'E-Gümrük', href: '#e-gumruk' },
  { label: 'Kariyer', modal: 'kariyer' },
  { label: 'Hakkımızda', href: '#/hakkimizda' },
];

export const hero = {
  eyebrow: 'Global Lojistik ve Gümrük Müşavirliği',
  title: 'Gümrükte ve yolda, tam zamanında.',
  text: 'Kara, hava ve deniz taşımacılığı ile gümrüklü antrepo hizmetlerini; ithalat, ihracat ve danışmanlık süreçleriyle tek çatı altında, uçtan uca yönetiyoruz.',
};

/* ---------- Hakkımızda (ayrı sayfa) ---------- */

export const aboutStats = [
  { value: '25+', label: 'Yıllık sektör tecrübesi' },
  { value: '2015', label: 'Mundoimex’in kuruluşu' },
  { value: '3', label: 'Taşıma modu: kara, hava, deniz' },
];

export const about = {
  title: 'Sektördeki tecrübe, yeni bir çatı altında.',
  text: 'Mundoimex Gümrük Müşavirliği Anonim Şirketi’nin kuruluşu yeni olsa da kurucu ortağımız ve yönetim kurulu başkanımız Rıdvan Haliloğlu’nun sektördeki tecrübesi yirmibeş yıllık bir geçmişe sahiptir.',
};

export const timeline = [
  {
    when: '25 yıl',
    tag: 'Tecrübe',
    icon: 'clock',
    tone: 'turkuaz',
    title: 'Gümrük müşavirliğinde bir kariyer',
    text: 'Kurucu ortağımız ve yönetim kurulu başkanımız Rıdvan Haliloğlu’nun sektördeki tecrübesi yirmibeş yıllık bir geçmişe sahiptir.',
  },
  {
    when: 'ONEL',
    tag: 'İlk şirket',
    icon: 'user',
    tone: 'gumruk',
    title: 'ONEL Gümrük Müşavirliği',
    text: 'Kurduğu ve yönettiği ONEL Gümrük Müşavirliği’ni Türkiye’nin beş farklı bölgesinde şubeler kurarak büyüttü ve yüz çalışanlı bir işletmeye dönüştürdü.',
  },
  {
    when: 'Büyüme',
    tag: 'Entegrasyon',
    icon: 'truck',
    tone: 'lojistik',
    title: 'Lojistik ve sigorta ile güçlenen yapı',
    text: 'Gümrükleme şirketini önce bir lojistik şirketiyle, ardından bir sigorta şirketiyle destekleyerek yapıyı güçlendirdi.',
  },
  {
    when: 'DHL',
    tag: 'Global deneyim',
    icon: 'globe',
    tone: 'turkuaz',
    title: 'DHL Global Forwarding',
    text: 'Korn Ferry International’ın MENAT Bölge Başkanı Şerif Kaynar tarafından DHL Global Forwarding’e yönetici olarak transfer edildi. Yaklaşık dört yıl boyunca sıfırdan bir gümrük departmanı kurdu ve geliştirdi.',
  },
  {
    when: '2015',
    tag: 'Kuruluş',
    icon: 'check',
    tone: 'gumruk',
    title: 'Mundoimex doğdu',
    text: 'DHL’deki proje tamamlandıktan sonra kendi isteğiyle ayrılarak 2015 yılında Mundoimex’i kurdu. Bugün “Tam Zamanında” ilkesiyle hizmet veriyoruz.',
  },
];

export const quality = {
  title: 'Kalite politikamız',
  intro:
    'Mundoimex Gümrük Müşavirliği; ekip ruhuyla çalışan, beklentileri aşan hizmetler sunarak müşteri memnuniyetini sağlayan, hizmetlerinde güvenilir ve kurumsallığını tamamlamış bir firma olarak benimsediği değerleri sürekli kılmayı hedeflemektedir.',
  items: [
    'Müşteri beklenti ve ihtiyaçlarını bilerek en etkin ve yaratıcı çözümleri en uygun maliyetle ve hızlı şekilde sunmak.',
    'Müşterilerin etkin şekilde bilgi alabilmesini sağlayacak bir iletişim ortamı sağlamak.',
    'Ekip ruhu ve ekip çalışması anlayışını, gerekli eğitim ve modern altyapı desteğiyle çalışanların gelişimi için sürekli geliştirmek.',
    'Yasa ve mevzuatlara uygun çalışmak, değişiklikleri sisteme hızlı şekilde uyarlamak.',
  ],
};

export const logoStory = {
  title: 'Logonun hikâyesi',
  summary:
    'Ticaret, denetim ve uluslararası alanda faaliyetlerini yürüten Mundoimex; kontrollü, yükselen, dengeli, geleceği ve gelişmeyi düşünen, sektörde iddialı bir şirkettir.',
  items: [
    {
      term: 'Dünya ve ekvator',
      text: 'Uluslararası hizmeti temsilen dünya şekli soyutlanmıştır. Ortadan geçen çizgi ekvatoru temsil eder; iki yarım küre birbirinin etrafında dönerek şirketin sürekliliğini anlatır.',
    },
    {
      term: 'O yerine amblem',
      text: 'İsmin tam ortasındaki “O” harfinin yerinde duran amblem; döngüsel ve hareketli yapıyı, sektördeki önemli konumu ve dengeleyici gücü ifade eder.',
    },
    {
      term: 'Gizli ok ve X',
      text: 'X ile önceki harf arasında ileriyi gösteren gizli bir ok vardır. Ok ve X birlikte ileri görüşü, sürekliliği, verimliliği, güveni, uyumu, değişimi ve gelişimi vurgular.',
    },
    {
      term: 'Oturmuş, geniş harfler',
      text: 'Tipografinin oturmuş ve geniş yapısı, yere sağlam basan bir şirket imajı oluşturur.',
    },
  ],
  colors: [
    {
      name: 'Turkuaz',
      hex: '#5CD2B0',
      bg: 'var(--turkuaz)',
      ink: 'var(--ink)',
      text: 'Grubun tüm şirketlerinde ortak renk. Türk rengi olarak bilinen turkuaz, milli gücü ifade eder.',
    },
    {
      name: 'Kırmızı',
      hex: '#D21327',
      bg: 'var(--gumruk)',
      ink: '#fff',
      text: 'Gümrük Müşavirliği: canlılık, denetim, kontrol, mücadele gücü, azim ve kararlılık.',
    },
    {
      name: 'Turuncu',
      hex: '#F98E18',
      bg: 'var(--lojistik)',
      ink: 'var(--ink)',
      text: 'Global Lojistik: güven esası, dışa dönüklük ve olgunluk.',
    },
    {
      name: 'Yeşil',
      hex: '#3E9B4F',
      bg: 'var(--geri-donusum)',
      ink: '#fff',
      text: 'Geri Dönüşüm: doğa, çevreyi koruma bilinci, geri kazanım, huzur ve yaratıcılık.',
    },
  ],
};

/* ---------- Gümrük çözümleri ---------- */

export const customs = {
  title: 'Gümrük çözümleri',
  intro:
    'Yerel ölçekte edinilen gümrük müşavirliği bilgi birikimini uluslararası tecrübeyle birleştiriyor, çok uluslu şirketlere de global çözümler sunuyoruz.',
  tabs: [
    { id: 'ithalat', label: 'İthalat' },
    { id: 'ihracat', label: 'İhracat' },
    { id: 'askiya', label: 'Askıya alma' },
    { id: 'danismanlik', label: 'Danışmanlık' },
  ],
};

export const ithalat = {
  title: 'İthalat işlemleri',
  lead: 'İthalat, ihracat, transit ve mali konuları kapsayan anahtar teslimi projeler hazırlıyor, uygulamalarını denetliyoruz.',
  groups: [
    {
      title: 'Ön hazırlık',
      items: [
        'İthal edilecek emtia için fizibilite raporlaması',
        'İthalat konusu emtia için G.T.İ.P. belirlenmesi',
        'Kapıdan kapıya işlemlerde siparişten itibaren tüm aşamaların takibi',
        'Lojistik hizmetlerinin koordinasyonunun sağlanması',
      ],
    },
    {
      title: 'Gümrük işlemleri',
      items: [
        'Küşat işlemleri',
        'Gümrük kabul ve tescil işlemine başlanarak emtianın muayenesinin yapılması',
        'Geçici ithalat ve ATA karneli ithalat işlemleri',
        'Aktarma ve transit işlemleri',
        'Varsa vesaiklerin konşimento cirolarının yaptırılması',
      ],
    },
    {
      title: 'Mali işlemler',
      items: [
        'Vergi, resim, harç ve benzerlerinin hesaplanması ve yatırılması',
        'Tahakkukların yapılarak ilgili teminat veya vergi ödemelerinin yapılması',
        'Depo olarak yatırılan nakit ve teminatın çözümü işlemleri',
        'Ardiye, mesai ve benzeri ödemelerin yapılması',
      ],
    },
    {
      title: 'Evrak ve teslimat',
      items: [
        'Eşyaların geçici depolama, antrepo vb. yerlerden çekilmesi, dahili nakliyesi ve firmaya teslimi',
        'Orijinal tasdikli belgelerin tasnifi ve operasyon departmanına teslimi',
        'Emtiada hasar, eksiklik veya yanlışlık varsa tutanak tanzim ettirilmesi ve ilgili birimlerin bilgilendirilmesi',
        'Kontrol belgesi ve TSE belgesi sevk temini işlemleri',
        'İsteğe bağlı sigortalama',
        'Evrak teslim formu ile evrakların teslimi ve malın talimatta belirtilen adrese fiziki teslimi',
      ],
    },
  ],
};

export const ihracat = {
  title: 'İhracat işlemleri',
  lead: 'İhracat sürecinin ön çalışmasından beyannamenin kapatılmasına kadar her adımı sizin adınıza yürütüyoruz.',
  groups: [
    {
      title: 'Ön çalışma',
      items: [
        'İhraç edilecek eşya için fizibilite çalışmasının yapılması',
        'Eşya için G.T.İ.P. tespiti',
        'Eşyanın türüne göre ilgili ihracatçı birliklerine üyelik işlemlerinin yaptırılması',
        'Hariçte işleme rejimi uygulamaları ve TEV',
      ],
    },
    {
      title: 'Belge ve sigorta',
      items: [
        'Kontrol belgesi, sağlık sertifikası, A.TR, EUR-1 menşe şahadetnamesi ve ülke durumuna göre konsolosluk tasdiki işlemleri',
        'Gümrük müşaviri tarafından düzenlenen evrakların bankaya ve/veya alıcıya ulaştırılması',
        'Nakliyat sigorta poliçesi',
      ],
    },
    {
      title: 'Gümrük operasyonu',
      items: [
        'İhraç edilecek eşyanın gümrük beyannamesinin düzenlenmesi ve operasyon işlemlerinin tamamlanması',
        'Yüklenen aracın gümrük işlemlerinin takibi',
        'Geçici ihracat işlemlerinin ve sürelerinin takibi',
      ],
    },
    {
      title: 'Kapanış',
      items: [
        'Gümrük çıkış beyannamesinin kapatılması',
        'Kapatılan gümrük çıkış beyannamelerinin ihracatçı nüshasının firmaya teslimi',
      ],
    },
  ],
};

export const danismanlik = {
  title: 'Danışmanlık',
  lead: 'Firmamız dış ticaretin her alanında, istenen detayda bilgiyi müşterilerine sunmaktadır.',
  groups: [
    {
      title: 'Danışmanlık konularımız',
      items: [
        '4458 sayılı Gümrük Kanunu danışmanlığı',
        'Dış ticaret rejimleri',
        'Dış ticarete ilişkin her türlü vergi mevzuatı danışmanlığı',
        'Yabancı sermaye ve teşvik mevzuatı proje ve işlemleri danışmanlığı',
        'Serbest bölge danışmanlığı',
        'Dijital arşiv konusunda danışmanlık hizmeti',
      ],
    },
  ],
};

export const askiya = {
  title: 'Askıya alma düzenlemeleri',
  lead: 'Mundoimex olarak askıya alma işlemlerinde sizin çözüm ortağınız olarak hizmet veriyoruz.',
  cards: [
    {
      icon: 'pause',
      title: 'Askıya alma',
      text: 'Türkiye ve AB’de üretimi bulunmayan ürünler için askıya alma uygulanır.',
    },
    {
      icon: 'quota',
      title: 'Tarife kontenjanı (kota)',
      text: 'AB ve Türkiye’de üretimi bulunan ancak yetersiz olan ürünler için tarife kontenjanı (kota) uygulanır.',
    },
    {
      icon: 'globe',
      title: 'Geçerlilik alanı',
      text: 'Yürürlüğe giren askıya alma ve kota düzenlemeleri tüm AB üyeleri ve Türkiye için geçerlidir.',
    },
    {
      icon: 'ban',
      title: 'Kapsam dışı ürünler',
      text: 'Bitmiş veya nihai ürünler ile perakende satış amacı taşıyan ürünler askıya alma rejimine konu edilemez.',
    },
  ],
};

/* ---------- Lojistik çözümleri ---------- */

export const logistics = {
  title: 'Lojistik çözümleri',
  intro:
    'İşinize verdiğiniz değerin temsilciliğini üstlenerek değerlerinizi taşıyoruz. Doğruluk ve şeffaflık tüm süreçlerimizde önceliğimizdir.',
  items: [
    {
      code: '01',
      label: 'KARA',
      title: 'Kara taşımacılığı',
      art: 'kara',
      text: 'Hem ulusal hem de uluslararası kara taşımacılığında yüksek hizmet kalitesi sunuyoruz. Müşterilerimizin talepleri doğrultusunda düzenlenen süreçleri güçlü servis sağlayıcılarımız ve uzman kadromuzla doğru, hızlı ve güvenilir biçimde yürütüyoruz.',
      points: ['Ulusal ve uluslararası taşıma', 'Güçlü servis sağlayıcı ağı', 'Uzman operasyon kadrosu'],
    },
    {
      code: '02',
      label: 'HAVA',
      title: 'Hava taşımacılığı',
      art: 'hava',
      text: 'Hava taşımacılığındaki deneyimimizi güçlü referanslarımızla birleştiriyor; dünyadaki tüm uçuş noktalarına uygun maliyetli ve hızlı hizmet sunuyoruz. Dünyanın her yerindeki iş ortaklarımızla diyalog ve ortaklık içinde, aynı etik standartlarla çalışıyoruz.',
      points: ['Tüm uçuş noktalarına hizmet', 'Uygun maliyet, hızlı servis', 'Etik standartlarda iş ortaklığı'],
    },
    {
      code: '03',
      label: 'DENİZ',
      title: 'Deniz taşımacılığı',
      art: 'deniz',
      text: 'Deniz taşımacılığı dünya ticaretinin öncü taşıma türüdür ve hacmi teknolojiyle birlikte büyümeye devam etmektedir. Ülkemizin coğrafi konumunun ve Marmara Bölgesi’ndeki limanların sağladığı avantajları yakından takip ediyor, değerli müşterilerimize sunuyoruz.',
      points: ['Marmara limanları avantajı', 'Üç tarafı denizlerle çevrili coğrafya', 'Dünya ticaretinin öncü modu'],
    },
  ],
};

export const storage = {
  title: 'Depolama',
  subtitle: 'Depo ve gümrüklü antrepo yönetimi',
  intro:
    'Depo yönetimi, tüm lojistik faaliyetlerde büyük öneme sahip alanlardan biridir. Hem gümrüklü hem gümrüksüz depolama alanlarımızla Türkiye’nin her bölgesinde müşterilerimize hizmet veriyoruz.',
  cards: [
    {
      icon: 'warehouse',
      title: 'Gümrüklü ve gümrüksüz alanlar',
      text: 'Gümrüklü antrepo ve gümrüksüz depo seçenekleriyle ihtiyacınıza uygun depolama.',
    },
    {
      icon: 'map',
      title: 'Türkiye’nin her bölgesinde',
      text: 'Depolama alanlarımızla Türkiye genelinde müşterilerimize hizmet veriyoruz.',
    },
    {
      icon: 'boxes',
      title: 'Stoklama',
      text: 'Gelişmiş yazılımlarımızla stok takibi ve stoklama süreçlerinde destek.',
    },
    {
      icon: 'cart',
      title: 'Sipariş hazırlama',
      text: 'Siparişlerin doğru, hızlı ve eksiksiz hazırlanması.',
    },
    {
      icon: 'forklift',
      title: 'Elleçleme',
      text: 'Elleçleme süreçlerinde maliyet odaklı çalışma anlayışımızla yanınızdayız.',
    },
    {
      icon: 'chip',
      title: 'Gelişmiş yazılım altyapısı',
      text: 'Tüm depo süreçleri gelişmiş yazılımlarımız üzerinden izlenir.',
    },
  ],
};

/* ---------- E-Gümrük, kariyer, teklif ---------- */

export const egumruk = {
  title: 'E-Gümrük uygulamaları',
  intro:
    'Dünyada dış ticaretin seyri çok hızlı gelişiyor ve değişiyor. Bu değişim iki önemli sonuç doğuruyor: e-gümrük ve e-ticaret uygulamaları.',
  terms: [
    {
      abbr: 'ICS',
      name: 'Import Control System',
      text: 'İthalat ve ihracatın tüm eşya hareketlerini kontrol edecek sistemdir.',
    },
    {
      abbr: 'EORI',
      name: 'European Registration and Identification System',
      text: 'Göndereni ve gümrük işlemlerini gerçekleştirecek gümrük müşavirini tanımak ve kontrole tabi tutmaktır.',
    },
    {
      abbr: 'AEO',
      name: 'Akredite Ekonomik Operatör',
      text: 'Faaliyet gösterdiği ülkede kapsamlı bir incelemeye tabi tutulduktan sonra bu statüye ulaşan gümrük müşavirini ifade eder.',
    },
    {
      abbr: 'REX',
      name: 'Akredite İhracatçı',
      text: 'Aynı araştırma metoduyla müşavirlik şirketlerinin müşterisi olan ithalatçı ve ihracatçılara verilen statüdür.',
    },
    {
      abbr: 'SW',
      name: 'Single Window (Tek Pencere)',
      text: 'Değişik mercilere ayrı ayrı yapılan ve vakit alan bildirimlerin tek merciye yapılmasını sağlar.',
    },
    {
      abbr: 'SEA',
      name: 'Single European Authorisation',
      text: 'AB’ye girişte hedef AB ülkesi birden fazla olsa da tek beyanname imkânı sağlar.',
    },
  ],
  body: [
    'Türkiye’nin dış ticaret hacmi gelişmekte; özellikle ülkenin coğrafi konumu Türkiye’ye ciddi bir lojistik avantaj sağlamaktadır. Üretim faktörlerinin ve hammaddelerin serbest dolaşıma konu olmasıyla küresel üretim ön plana çıkmış, dahilde işleme ve hariçte işleme kavramları daha fazla hayatımıza girmiştir.',
    'Bugün ülkeler arasındaki ticarette büyük oranda kâğıda dayalı klasik usuller geçerli olsa da dünya ticaretinin yakın geleceği “elektronik ticaret” ve “elektronik işletme” yoluyla yapılan ticarete doğru yönelmektedir.',
    'Mundoimex; Gümrük Müşaviri ve Gümrük Müşavir Yardımcısı yetki belgesi sahibi personeli, uzman müşteri danışmanları ve mevzuat servisiyle müşterilerine ulusal ve uluslararası mevzuata en uygun çözümleri sunar. Hem şirket içi mesleki eğitimlere hem de müşterilerinin dış ticarete yönelik eğitimlerine önem verir; tüm sektörlere hizmet verir.',
    'Lojistik hizmetleriyle de devam eden Mundoimex, “Tam Zamanında” sloganını kendine ilke edinmiş; müşterilerine zamanında, doğru hizmeti götürmeyi ilk hedefi olarak belirlemiştir.',
  ],
};

export const services = {
  title: 'Dijital hizmetler ve başvurular',
  intro: 'E-gümrük uygulamalarını inceleyin, ekibimize katılın veya ihtiyacınıza özel teklif isteyin.',
  cards: [
    {
      id: 'egumruk',
      title: 'E-Gümrük Uygulamaları',
      text: 'ICS, EORI, AEO, REX, SW ve SEA kavramları ile dış ticaretin elektronik geleceği.',
      cta: 'İncele',
      tone: 'var(--turkuaz)',
      hover: '#06191d',
      art: 'egumruk',
    },
    {
      id: 'kariyer',
      title: 'Kariyer',
      text: 'Ekip ruhuyla çalışan, kendini geliştiren bir kadroda yerinizi alın. Başvuru formunu doldurun.',
      cta: 'Başvur',
      tone: 'var(--lojistik)',
      hover: '#06191d',
      art: 'kariyer',
    },
    {
      id: 'teklif',
      title: 'Teklif Formu',
      text: 'Kara, hava, deniz, depolama ve gümrük hizmetleri için size özel teklifi hızlıca alın.',
      cta: 'Teklif iste',
      tone: 'var(--gumruk)',
      hover: '#ffffff',
      art: 'teklif',
    },
  ],
};

export const quoteServices = [
  'Kara taşımacılığı',
  'Hava taşımacılığı',
  'Deniz taşımacılığı',
  'Depo ve gümrüklü antrepo',
  'İthalat işlemleri',
  'İhracat işlemleri',
  'Askıya alma',
  'Danışmanlık',
];
