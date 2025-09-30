import { Award, Clock, Mail, Phone, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FAQSection from '../components/FAQSection';
import { aboutPageFAQs } from '../data/faqData';

const AboutPage = () => {
  return (
    <>
      <SEOHead 
        title="Hakkımızda | İzmir Wing Chun Sanat Derneği"
        description="İzmir Wing Chun Sanat Derneği hakkında bilgiler. Deneyimli eğitmen kadromuz, tarihçemiz ve Wing Chun felsefesi hakkında detaylı bilgi."
        keywords="izmir wing chun derneği, wing chun eğitmenleri, wing chun tarihi, dövüş sanatları derneği izmir"
        ogUrl="https://izmirwingchun.com/hakkimizda"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              İzmir Wing Chun Sanat Derneği
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Geleneksel Wing Chun sanatını İzmir'de yaşatıyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Dernek Hakkında */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Wing Chun Sanat Derneğimiz
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  WTAA, 2000 yılında Sifu Kenan Ataman tarafından kuruldu . O zamandan bu yana, her yaştan insana uygun, tanıdık ve keyifli bir eğitim ortamında yüksek kaliteli eğitime özellikle önem vermektedir.
                </p>
                <p>
                  WTAA, Avrupa'nın önde gelen Wing Tsung derneklerinden biridir ve popülaritesi ve yeni okulların açılması sürekli olarak artmaktadır.
                </p>
                <p>
                  Sizi ortak eğitim oturumlarına içtenlikle davet ediyoruz! WTAA ve Dai-Sifu Ataman olarak hedefimiz, ilgilenen herkese kişiye özel, gerçekçi ve birinci sınıf bir eğitim sunmaktır. Ayrıca öğrencilerimizin güçlü, kendine güvenen ve sorumluluk sahibi bireyler olarak yetişmelerini sağlamak amacıyla Wing Tsung dövüş sanatının felsefesini ve tarihini aktarmak istiyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/Wing-Tsung-Art-Association-aile-agaci.webp"
                alt="Wing Chun Derneği"
                className="w-full h-100 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">2018</p>
                <p className="text-sm">Kuruluş Yılı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wing Chun Felsefesi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wing Chun Felsefesi ve Tarihi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              300 yıllık geçmişiyle Wing Chun, sadece bir dövüş sanatı değil, 
              aynı zamanda bir yaşam felsefesidir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basitlik</h3>
              <p className="text-gray-600">
                Wing Chun'un temel prensibi basitliktir. Karmaşık hareketler yerine 
                etkili ve direkt teknikleri tercih ederiz. En kısa yol en iyi yoldur.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Merkez Çizgi</h3>
              <p className="text-gray-600">
                Merkez çizgi teorisi Wing Chun'un kalbini oluşturur. Bu teori hem 
                fiziksel tekniklerde hem de yaşam felsefesinde denge ve odaklanmayı temsil eder.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sakinlik</h3>
              <p className="text-gray-600">
                Gerçek güç sakinlik içinde bulunur. Wing Chun, duygusal kontrolü ve 
                zihinsel berraklığı öğreterek kişinin hayatın her alanında başarılı olmasını sağlar.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Wing Chun'un Tarihi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-600">
                <p>
                  Wing Chun, 18. yüzyılda Çin'de Ng Mui adlı Shaolin rahibesi 
                  tarafından geliştirilmiştir. Sanatın adı, ilk öğrencisi olan 
                  Yim Wing Chun'dan gelmektedir.
                </p>
                <p>
                  Bu sanat, küçük ve zayıf birinin büyük ve güçlü birine karşı 
                  kendini savunabilmesi prensibi üzerine kuruludur. Bu nedenle 
                  teknikler etkili, pratik ve herkesin öğrenebileceği şekilde tasarlanmıştır.
                </p>
                <p>
                  Wing Chun, Bruce Lee'nin eğitimi aldığı sanat olarak da ünlüdür. 
                  Lee'nin başarısı sayesinde Wing Chun dünya çapında tanınmıştır.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/8611543/pexels-photo-8611543.jpeg"
                  alt="Wing Chun Tarihi"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitmen Kadromuz */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Deneyimli Eğitmen Kadromuz
            </h2>
            <p className="text-xl text-gray-600">
              Uluslararası sertifikalara sahip profesyonel eğitmenlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Başeğitmen */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/Sifu-Kenan-Ataman-WTAA-bas-egitmen.webp"
                  alt="Sifu Kenan Ataman - Başeğitmen"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sifu Kenan Ataman</h3>
                <p className="text-yellow-600 font-semibold mb-4">Başeğitmen</p>
                <p className="text-gray-600 mb-4">
                  15 yıllık Wing Chun deneyimi. Hong Kong'da eğitim almış, 
                  uluslararası sertifikalara sahip.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-yellow-500" />
                    <span>Sifu Seviyesi (7. Dan)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-yellow-500" />
                    <span>15+ Yıl Deneyim</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Eğitmen 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/Sifu-Mustafa-Cetin.webp"
                  alt="Sifu Mustafa Çetin - Araştırmacı, Komite Üyesi"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sifu Mustafa Çetin</h3>
                <p className="text-blue-600 font-semibold mb-4">Araştırmacı, komite üyesi</p>
                <p className="text-gray-600 mb-4">
                  Çocuk pedagojisi alanında uzmanlaşmış, 8 yıllık Wing Chun deneyimi.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-yellow-500" />
                    <span>Eğitmen Seviyesi (4. Dan)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-yellow-500" />
                    <span>8+ Yıl Deneyim</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Eğitmen 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/Sihing-Firat-Artan-Wing-Chun.webp"
                  alt="Sihing Fırat Arıkan - Ege Bölge Sorumlusu"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sihing Fırat Arıkan</h3>
                <p className="text-green-600 font-semibold mb-4">Ege Bölge Sorumlusu</p>
                <p className="text-gray-600 mb-4">
                  Kendini savunma alanında uzman, 12 yıllık Wing Chun deneyimi.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-yellow-500" />
                    <span>Eğitmen Seviyesi (5. Dan)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-yellow-500" />
                    <span>12+ Yıl Deneyim</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xl text-blue-100">
              Sorularınız için bize ulaşabilirsiniz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Adresimiz</h3>
              <p className="text-blue-100">
                Mimar Sinan mah, Alsancak<br />
                1408. Sk. Hacı Bey apt no:6 D:1<br />
                35220 Konak, İzmir
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Telefon</h3>
              <p className="text-blue-100">
                +90 507 419 50 13
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">E-posta</h3>
              <p className="text-blue-100">
                info@izmirwingchun.com<br />
                dernek@izmirwingchun.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <FAQSection faqs={aboutPageFAQs} />
    </>
  );
};

export default AboutPage;