# Mundoimex arayüz tasarımı

Marka kimliği (renkler, logo hikâyesi, "Tam Zamanında" ilkesi) mundoimex.com'dan alınmıştır;
arayüz modern kurumsal bir dille sıfırdan yeniden yazılmıştır. Tüm değerler `src/styles/tokens.css` içindedir.

## Renk

| Rol | Token | Değer |
| --- | --- | --- |
| Turkuaz (grup rengi) | `--turkuaz` | `#5CD2B0` |
| Derin turkuaz (birincil düğme, bağlantı) | `--teal` | `#007F87` |
| Gümrük (kırmızı) | `--gumruk` | `#D21327` |
| Lojistik (turuncu) | `--lojistik` | `#F98E18` |
| Koyu zemin | `--navy` | `#06191D` |
| Açık yüzeyler | `--surface`, `--line` | `#F3F8F8`, `#D8E4E6` |

Gümrük bölümleri kırmızı, lojistik/depolama bölümleri turuncu vurgu kullanır; turkuaz ortak vurgudur.

## Tipografi

Tek aile: **Archivo Variable**. Başlıklar 750–800 ağırlık, sıkı harf aralığı; logo yazısı geniş (`font-stretch: 125%`).

## Sayfa akışı ve bileşenler

| Bölüm | Bileşen |
| --- | --- |
| Hero | Koyu zemin, dönen amblem + yörünge, altında 4 hızlı eylem (teklif, telefon, e-posta, adres) |
| Hakkımızda (ayrı sayfa, `#/hakkimizda`) | `AboutPage`: sayılar, `Timeline` (tıklama, ok tuşu, otomatik oynatma), kalite politikası, logo hikâyesi. Ana sayfada yer almaz; menüde ve alt bilgide bağlantısı vardır |
| Gümrük çözümleri | Sekmeler. İthalat/İhracat/Danışmanlık: `HoverSlider` (21st.dev "animated slideshow" uyarlaması; görsel yerine gruplanmış maddeler). Askıya alma: bilgi kutuları |
| Lojistik çözümleri | Kara / Hava / Deniz: yan yana 3 resmi `ShowcaseCard` |
| Depolama | 6 bilgi kutusu |
| E-Gümrük, Kariyer, Teklif | `InfoCard` (21st.dev kart uyarlaması; dönen çerçeve). Tıklanınca ilgili pencere açılır |
| İletişim | Üst menüden açılan pencere (Google Haritalar gömülü) + sayfa altında alt bilgi |

Pencereler `components/Modal.jsx` içindeki tek bir sağlayıcıdan yönetilir (Esc, dış tık, odak geri dönüşü).
Formlar sunucusuz çalışır: gönderimde `info@mundoimex.com` adresine hazır `mailto:` açılır.

## Çalıştırma

```bash
npm install
npm run dev
```

## Açık noktalar

- Logo GIF'ten SVG olarak yeniden çizildi; kurumsal kimlik dosyası (AI/SVG) varsa değiştirilmeli.
- Araç görselleri (`public/img`) eski siteden, düşük çözünürlüklü; yüksek çözünürlüklü sürümleri istenmeli.
- Formlar gerçek bir e-posta/API servisine bağlanmadı (şimdilik `mailto:`). Kariyer formunda CV eki için dosya yükleme backend gerektirir.
- Sitedeki metinlerde yazım hataları düzeltildi ve tekrar eden maddeler birleştirildi (`src/data/content.js`).
