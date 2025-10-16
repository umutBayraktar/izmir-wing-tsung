import { Link } from 'react-router-dom';
import { Users, Clock, Award, Heart, Shield, Target, Star, Brain } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ChildCourseDetails = () => {
  return (
    <>
      <SEOHead 
        title="Çocuk Wing Chun Kursu (5-13 yaş) | İzmir Wing Chun"
        description="5-13 yaş çocuklar için özel tasarlanmış Wing Chun kursu. Eğlenceli öğrenme, disiplin ve motor beceri geliştirme. İlk ders ücretsiz!"
        keywords="çocuk wing chun, çocuk kung fu izmir, 5-13 yaş dövüş sanatı, çocuk sporu izmir"
        ogUrl="https://izmirwingchun.com/kurslar/cocuk-grubu"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold inline-block mb-6">
              5-13 Yaş Grubu
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Çocuk Wing Chun Kursu
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Çocuğunuz için eğlenceli ve eğitici Wing Chun deneyimi
            </p>
          </div>
        </div>
      </section>

      {/* Kurs Detayları */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Çocuğunuz İçin Mükemmel Başlangıç
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                7-12 yaş arası çocuklar için özel olarak tasarlanan Wing Chun programımız, 
                oyun temelli öğrenme metoduyla çocuğunuzun hem fiziksel hem de mental 
                gelişimini destekler.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <Users className="text-yellow-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Yaş Grubu</h3>
                  <p className="text-gray-700">5-13 yaş</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Clock className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Ders Saatleri</h3>
                  <p className="text-gray-700">Cumartesi<br />12:00 - 14:00 (2 Derslik blok ders)</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Award className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Seviye</h3>
                  <p className="text-gray-700">Başlangıç</p>
                </div>
                
              </div>

              <a 
                href="https://wa.me/905074195013?text=Kurslarınız%20hakkında%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors inline-block"
              >
                Hemen Kayıt Ol
              </a>
            </div>

            <div className="relative">
              <img 
                src="/izmir-wing-tsung/images/izmir-wing-chun-cocuk-grubu.jpg"
                alt="Çocuk Wing Chun Eğitimi"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-gray-900 p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Hemen deneme dersine katıl</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Çocuk Wing Chun'un Faydaları */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Çocuklar İçin Wing Chun'un Faydaları
            </h2>
            <p className="text-xl text-gray-600">
              WTAA çocuk antrenmanlarının sunduğu eşsiz avantajlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Günlük yaşamda denge */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Günlük Yaşamda Denge</h3>
              <p className="text-gray-600 leading-relaxed">
                Günümüzde çocuklar performans odaklı bir toplumda stresli durumlarla başa çıkmak zorunda. 
                WTAA'nın çocuk antrenmanları, sağlıklı bir denge ve dayanıklılık için güçlü bir temel sunuyor. 
                Günlük yaşamın duygusal stresi, fiziksel ve atletik aktivitelerle mükemmel şekilde dengeleniyor.
              </p>
            </div>

            {/* Fiziksel uygunluk */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Fiziksel Uygunluk</h3>
              <p className="text-gray-600 leading-relaxed">
                Düzenli antrenman seansları koordinasyon, konsantrasyon, dayanıklılık, direnç ve özgüvenin yanı sıra 
                hız ve gücü de geliştirir. WTAA'nın özel çocuk antrenmanları, çocukların daha iyi uyku çekmelerini 
                sağlar ve okulda konsantrasyon yeteneklerini geliştirir.
              </p>
            </div>

            {/* Değerleri iletir */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Değerleri İletir</h3>
              <p className="text-gray-600 leading-relaxed">
                Saygı ve disiplin, WTAA eğitiminin temel taşlarıdır. Bu değerler, çocukların kişiliklerini 
                olumlu yönde şekillendirir ve güçlendirir. Karakterin temeli erken yaşta atılır.
              </p>
            </div>

            {/* Sosyalleşme */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sosyalleşme</h3>
              <p className="text-gray-600 leading-relaxed">
                Çocuklar, WTAA'da hem spor aktiviteleri hem de akranlarıyla grup antrenmanları aracılığıyla 
                sosyal bağlarını sürdürebilir ve genişletebilir. Antrenmanlarda öğrenilen değerler, 
                sosyalleşme yoluyla günlük hayata aktarılır.
              </p>
            </div>

            {/* Oyunlu öğrenme */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Oyunlu Öğrenme</h3>
              <p className="text-gray-600 leading-relaxed">
                Çocuklar oyun oynayarak öğrenmeyi severler. Öz savunma çocuklarda daha belirgindir ve 
                şaka yollu kavga etmekten büyük keyif alırlar. Bu neşe çocuklar için motivasyon 
                göstergesi haline gelir. Ne kadar çok eğlenilirse, başarı da o kadar artar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veli Yorumları */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Velilerimizin ve Öğrenci Yorumları
            </h2>
            <p className="text-xl text-blue-100">
              Çocuklarını bizden Wing Chun eğitimi alan velilerimizin ve öğrencilerimizin deneyimleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic text-lg">
                "3 yıldır devam ediyoruz abimle gayet güzel bir ortam...
              Fırat hocamla sistemli bir şekilde çalışıyoruz..
              Muhakkak gelip deneme antrenmanına gelip katılmanızı tavsiye ederim..
              Pişman olmazsınız.. şuan 7. Seviyedeyim"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  MHD
                </div>
                <div>
                  <h4 className="font-semibold">Muhammed </h4>
                  <p className="text-blue-200 text-sm"></p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic text-lg">
                "1.5 yıldır geliyorum ve çok güzel bir şekilde kendimi savuna biliyorum 10 yaşındayım"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  YSÖ
                </div>
                <div>
                  <h4 className="font-semibold">Yavuz Selim Özgürel</h4>
                  <p className="text-blue-200 text-sm"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Çocuğunuz İçin Harika Bir Fırsat!
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            İlk dersi ücretsiz deneyin. Çocuğunuzun Wing Chun'u sevip sevmediğini 
            görmek için bize bekleriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905074195013"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Hemen Ara: +90 507 419 50 13
            </a>
            <Link 
              to="/kurslar"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Diğer Kursları Gör
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildCourseDetails;