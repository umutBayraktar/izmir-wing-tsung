import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Star, 
  ChevronRight,
  Shield,
  Heart,
  Target
} from 'lucide-react';
import Slider from '../components/Slider';
import SEOHead from '../components/SEOHead';
import FAQSection from '../components/FAQSection';
import { homePageFAQs } from '../data/faqData';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "İzmir Wing Chun",
    "description": "İzmir'de profesyonel Wing Chun Kung Fu eğitimi veren spor kulübü",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mimar Sinan mah, Alsancak, 1408. Sk. Hacı Bey apt no:6 D:1",
      "addressLocality": "Konak",
      "addressRegion": "İzmir",
      "postalCode": "35220",
      "addressCountry": "TR"
    },
    "telephone": "+90 507 419 50 13",
    "email": "info@izmirwingchun.com",
    "url": "https://izmirwingchun.com",
    "sportsActivityLocation": ["Kung Fu", "Wing Chun", "Martial Arts"],
    "priceRange": "$$"
  };

  return (
    <>
      <SEOHead 
        title="İzmir Wing Chun - Geleneksel Kung Fu Eğitimi | Ana Sayfa"
        description="İzmir'de en iyi Wing Chun Kung Fu eğitimi. Çocuk, genç ve yetişkin grupları için profesyonel kurslar. Deneyimli eğitmenlerle geleneksel dövüş sanatını öğrenin."
        keywords="izmir wing chun, izmir wing tsun, izmir vin çun, kung fu izmir, dövüş sanatları izmir, izmir yakın dövüş kursu, wing chun eğitimi, çocuk kung fu kursu, yetişkin kung fu, izmir spor kulübü"
        ogUrl="https://izmirwingchun.com"
        structuredData={structuredData}
      />

      {/* Hero Slider */}
      <Slider />

      {/* Kurs Grupları */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kurs Gruplarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her yaş grubuna özel hazırlanmış Wing Chun eğitim programlarımızla 
              herkesi sanatın bu eşsiz dünyasına davet ediyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Çocuk Grubu */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/izmir-wing-tsung/images/izmir-wing-chun-cocuk-grubu.jpg"
                  alt="Çocuk Wing Chun Kursu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-custom-blue bg-opacity-20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Çocuk Grubu</h3>
                <p className="text-gray-600 mb-4">5-13 yaş arası çocuklar için özel tasarlanmış eğlenceli ve eğitici Wing Chun programı.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">5-13 yaş</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">Cumartesi 12:00 - 14:00 (2 Derslik blok ders)</span>
                  </div>
                </div>
                <Link 
                  to="/kurslar/cocuk-grubu"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center group"
                >
                  Detayları Gör
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Genç Grubu */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/izmir-wing-tsung/images/izmir-wing-chun-genc-grubu.jpg"
                  alt="Genç Wing Chun Kursu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-custom-blue bg-opacity-20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Genç Grubu</h3>
                <p className="text-gray-600 mb-4">13-18 yaş arası gençler için disiplin ve teknik odaklı Wing Chun eğitimi.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">13-18 yaş</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">Salı & Cuma - 20:00-21:00</span>
                  </div>
                </div>
                <Link 
                  to="/kurslar/genc-grubu"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center group"
                >
                  Detayları Gör
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Yetişkin Grubu */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/izmir-wing-tsung/images/izmir-wing-chun-yetiskin-grubu.jpg"
                  alt="Yetişkin Wing Chun Kursu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-custom-blue bg-opacity-20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yetişkin Grubu</h3>
                <p className="text-gray-600 mb-4">18 yaş üzeri yetişkinler için profesyonel düzeyde Wing Chun öğretimi ve uygulaması.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">18 yaş ve üzeri</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">Pazartesi & Çarşamba - 20:00 - 21:00</span>
                  </div>
                </div>
                <Link 
                  to="/kurslar/yetiskin-grubu"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center group"
                >
                  Detayları Gör
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Bölümü */}
      <section className="py-20 bg-custom-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Wing Chun Sanatını Keşfedin
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Geleneksel Çin dövüş sanatı Wing Chun'un temellerini ve felsefesini 
                öğrenerek kendinizi hem fiziksel hem de mental olarak geliştirin. 
                Bu videomuzda eğitim metodlarımızı ve yaklaşımımızı görebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/kurslar"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors text-center"
                >
                  Kurslara Katıl
                </Link>
                <Link 
                  to="/hakkimizda"
                  className="border border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-full font-semibold transition-colors text-center"
                >
                  Daha Fazla Bilgi
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  className="w-full h-80 object-cover"
                  controls
                  poster="/izmir-wing-tsung/images/wing-tsung-sanat-dernegi.png"
                  preload="metadata"
                >
                  <source 
                    src="https://wtaa.de/wp-content/uploads/videos/WTAA_HALF_SHORT_CUT_HD_1080P.mp4" 
                    type="video/mp4" 
                  />
                  <p className="text-white text-center p-4">
                    Tarayıcınız video oynatmayı desteklemiyor. 
                    <a 
                      href="https://wtaa.de/wp-content/uploads/videos/WTAA_HALF_SHORT_CUT_HD_1080P.mp4" 
                      className="text-yellow-500 underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Videoyu buradan izleyebilirsiniz.
                    </a>
                  </p>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İzmir'de Wing Chun Eğitimimiz */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İzmir'de Wing Chun Eğitimimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Şehrimizde Wing Chun sanatını en iyi şekilde öğretmek için 
              geleneksel yöntemlerle modern eğitim tekniklerini harmanlıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-custom-blue text-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geleneksel Yöntem</h3>
              <p className="text-gray-600">
                Yüzyıllardır süregelen geleneksel Wing Chun öğretim metodlarını 
                titizlikle uyguluyoruz ve sanatın özünü koruyoruz.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-custom-blue text-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kişisel Gelişim</h3>
              <p className="text-gray-600">
                Wing Chun sadece fiziksel bir sanat değil, aynı zamanda mental 
                disiplin ve kişisel gelişim için mükemmel bir araçtır.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-custom-blue text-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hedef Odaklı</h3>
              <p className="text-gray-600">
                Her öğrencinin bireysel hedeflerini göz önünde bulundurarak 
                özelleştirilmiş eğitim programları sunuyoruz.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Neden Wing Chun?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Pratik Savunma:</strong> Gerçek hayatta kullanılabilir etkili savunma teknikleri
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Mental Disiplin:</strong> Konsantrasyon, odaklanma ve mental güç geliştirme
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Fiziksel Kondisyon:</strong> Esneklik, güç ve koordinasyon gelişimi
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Stres Yönetimi:</strong> Günlük stresin azaltılması ve iç huzur
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/izmir-wing-tsung/images/izmir-wing-chun-wing-chun-egitimi.png"
                  alt="Wing Chun Felsefesi"
                  className="w-full h-100 object-cover object-center rounded-xl"
                  style={{ objectPosition: 'center center' }}
                />  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanıcı Yorumları */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Öğrencilerimizin Yorumları
            </h2>
            <p className="text-xl text-gray-600">
              Bizden Wing Chun eğitimi alan öğrencilerimizin deneyimleri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Yorum 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Wing Tsun ve dövüş sanatlarına küçüklüğümden beri meraklıyım ama bir türlü başlayamamıştım. Birkaç ay önce bir deneme dersine katılmak istedim, hala devam ediyorum :). Fırat hocam ve diğer hocalarım çok ilgili, kursta da çok güzel bir ortam var. Kurs günlerini iple çekiyorum."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  UB
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Umut Bayraktar</h4>
                  <p className="text-gray-600 text-sm">Yetişkin Grubu</p>
                </div>
              </div>
            </div>

            {/* Yorum 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "İp-man filimlerini izledikten sonra film işte abartı demiştim buraya başlayınca filimler hafif kalırmış.
Spora başlamak için arayış içindeyken bir vesile Fırat hocayla tanışıp hem spor hemde teknik bir eğitimin daha faydalı olduğuna kaanat getirdim şimdi oğlumda başladı

Her yaştan kaliteli insanların buluştuğu bir salon
Bize bu fırsatı sunduğu için Fırat hocama teşekkürler"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Abdurrahman Özgürel</h4>
                  <p className="text-gray-600 text-sm">Yetişkin Grubu</p>
                </div>
              </div>
            </div>

            {/* Yorum 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Yaklaşık 4 yıldır bu sporla uğraşıyorum buraya gelip deşarj oluyorum denebilir fırat hocam ve buradaki abilerim sayesinde kendimi çok geliştirdim ve çok değiştirdim herkesin gelip bir kere deneme antrenmanına katılmasını tavsiye ederim ayrıca burada salondan çok abi-kardeş aile ortamı var sporun yanında bulunmaz bir nimet oluyor"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EG
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Nurullah Baran Çaşka</h4>
                  <p className="text-gray-600 text-sm">Genç Grubu</p>
                </div>
              </div>
            </div>
            {/* Yorum 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Tavsiye üzerine tanıştım Fırat hoca ile. Kendisi gayet yetkin ve ilgili. Duru bir anlatımı var. Ben 2 aydır bire bir çalışıyorum ve gerek öğretici duruşu gerekse işini ciddiye alarak yapmasiyla son derece verimli çalışıyoruz. Hareketleri sabırla tekrar tekrar gösteriyor müdahale etmesi gereken yerde nokta atışı müdahaleler ile en doğru yolu gösteriyor. Gerek verimlilik gerekse uygulanabilirlik bakımından gayet iyi bir kurs. Fırat hocama teşekkür ediyorum."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EG
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ömer Mutlu</h4>
                  <p className="text-gray-600 text-sm">Genç Grubu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <FAQSection 
        faqs={homePageFAQs}
        subtitle="Wing Chun eğitimimiz hakkında merak ettikleriniz"
      />

      {/* İletişim ve Harita */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xl text-gray-600">
              Sorularınız için bize ulaşın ve spor salonumuzu ziyaret edin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-custom-blue text-yellow-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adresimiz</h4>
                      <p className="text-gray-600">
                        Mimar Sinan mah, Alsancak<br />
                        1408. Sk. Hacı Bey apt no:6 D:1<br />
                        35220 Konak / İzmir
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-custom-blue text-yellow-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ders Saatleri</h4>
                      <p className="text-gray-600">
                        <p>Pazartesi : 06:00-22:00</p>
                        <p>Salı : 06:00-22:00</p>
                        <p>Çarşamba : 06:00-22:00</p>
                        <p>Perşembe : 06:00-22:00</p>
                        <p>Cuma : 06:00-22:00</p>
                        <p>Cumartesi : 06:00-22:00</p>
                        <p>Pazar : Kapalı</p>
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h4 className="font-semibold text-gray-900 mb-4">İlk Dersiniz Ücretsiz!</h4>
                    <p className="text-gray-700 mb-4">
                      Wing Chun'u denemek istiyorsanız, ilk dersiniz tamamen ücretsizdir. 
                      Rezervasyon için bizi arayın.
                    </p>
                    <a 
                      href="https://wa.me/905074195013?text=Kurslarınız%20hakkında%20bilgi%20almak%20istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold transition-colors inline-block"
                    >
                      Hemen Rezervasyon Yap
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.3464329849508!2d27.142419576648216!3d38.43346627182681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd844a651cb03%3A0xe0fb3c44476afcc9!2s%C4%B0zmir%20Wing%20Tsun%20-%20WTAA!5e0!3m2!1str!2str!4v1759181631229!5m2!1str!2str"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="İzmir Wing Tsun - WTAA Konumu"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;