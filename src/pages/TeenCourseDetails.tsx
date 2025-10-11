import { Link } from 'react-router-dom';
import { Users, Clock, Award, Target, Brain, Zap, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const TeenCourseDetails = () => {
  return (
    <>
      <SEOHead 
        title="Genç Wing Chun Kursu (13-18 yaş) | İzmir Wing Chun"
        description="13-18 yaş gençler için Wing Chun kursu. Disiplin, kendini savunma ve mental güç geliştirme. Akranlarıyla sosyalleşme fırsatı. İlk ders ücretsiz!"
        keywords="genç wing chun, genç kung fu izmir, 13-18 yaş dövüş sanatı, ergen sporu izmir, kendini savunma kursu"
        ogUrl="https://izmirwingchun.com/kurslar/genc-grubu"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold inline-block mb-6">
              13-18 Yaş Grubu
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Genç Wing Chun Kursu
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Gençlik döneminde disiplin, güven ve kendini savunma
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
                Gençlik Dönemi İçin İdeal
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                13-18 yaş arası gençler için özel olarak tasarlanan Wing Chun programımız, 
                bu kritik yaş dönemindeki gençlerin fiziksel ve mental gelişimlerini 
                destekleyerek özgüven kazanmalarını sağlar.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <Users className="text-yellow-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Yaş Grubu</h3>
                  <p className="text-gray-700">13-18 yaş</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Clock className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Ders Saatleri</h3>
                  <p className="text-gray-700">Sal & Cuma<br />20:00-21:00</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Award className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Seviye</h3>
                  <p className="text-gray-700">Başlangıç-Orta</p>
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
                src="/izmir-wing-tsung/images/izmir-wing-chun-genc-grubu.jpg"
                alt="Genç Wing Chun Eğitimi"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-gray-900 p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Hemen deneme dersine katıl</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gençlik Döneminin Zorluklarına Çözüm */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gençlik Döneminin Zorluklarına Çözüm
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ergenlik dönemi birçok zorluk barındırır. Wing Chun bu zorlukların 
              üstesinden gelmek için etkili araçlar sunar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Günlük Yaşamda Denge</h3>
              <p className="text-gray-600 mb-4">
                Günümüzde gençler, erken yaşlardan itibaren stresli durumlarla başa çıkmak zorunda kaldıkları performans odaklı bir toplumda yaşıyor. WTAA'nın genç antrenmanları, gençlerin dayanıklılığı için sağlıklı bir denge ve güçlü bir temel sunuyor.
              </p>
              <p className="text-gray-600">
                Günlük yaşamın duygusal stresi, fiziksel ve atletik aktivitelerle mükemmel bir şekilde dengelenebilir. Bu, günlük davranışlar üzerinde de olumlu bir etkiye sahiptir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiziksel Uygunluk</h3>
              <p className="text-gray-600">
                Düzenli antrenman seansları koordinasyon, konsantrasyon, dayanıklılık, direnç ve özgüvenin yanı sıra hız ve gücü de geliştirir. WTAA'nın özel genç antrenmanları, gençlerin doğru şekilde egzersiz yapmalarını sağlayarak daha iyi, daha huzurlu ve daha dinlendirici bir uyku çekmelerini sağlar ve bu da okulda konsantrasyon yeteneklerini geliştirir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Değerleri İletir</h3>
              <p className="text-gray-600 mb-4">
                Saygı ve disiplin, WTAA eğitiminin temel taşlarıdır. Bu değerler, gençlerin kişiliklerini olumlu yönde şekillendirir ve güçlendirir.
              </p>
              <p className="text-gray-600">
                Gençler, WTAA'da hem spor aktiviteleri hem de akranlarıyla grup antrenmanları aracılığıyla sosyal bağlarını sürdürebilir ve genişletebilirler. Antrenmanlarda öğrenilen değerler, sosyalleşme yoluyla günlük hayata aktarılabilir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Motivasyonlu Öğrenme</h3>
              <p className="text-gray-600">
                Gençler meydan okumayı seven bir öğrenme tarzını benimser. Öz savunma hepimizin özünde vardır, ancak gençlerde daha belirgindir. Rekabetçi ortamdan büyük keyif alırlar. Bu motivasyon aynı zamanda gençler için başarı göstergesi haline gelir. Ne kadar çok motive olurlarsa, spor içinde ve dışında katılım ve buna bağlı başarı da o kadar artar.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Genç Öğrenci Yorumları */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Genç Öğrencilerimizin Yorumları
            </h2>
            <p className="text-xl text-blue-100">
              Wing Chun eğitimi alan genç öğrencilerimizin deneyimleri
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
                "Wing Chun'a başladığımdan beri hem fiziksel hem de mental olarak çok güçlendim. 
                Okuldaki zorbalık problemleriyle başa çıkabiliyorum artık. Arkadaşlarımla 
                da çok daha iyi anlaşıyorum."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  AK
                </div>
                <div>
                  <h4 className="font-semibold">Ali Kara</h4>
                  <p className="text-blue-200 text-sm">15 yaş - Lise 1. Sınıf</p>
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
                "Başlangıçta çekingendim ama Wing Chun sayesinde özgüvenim çok arttı. 
                Artık kendimi ifade edebiliyorum ve sınavlara daha sakin giriyorum. 
                Stresle başa çıkmayı öğrendim."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  EG
                </div>
                <div>
                  <h4 className="font-semibold">Elif Güzel</h4>
                  <p className="text-blue-200 text-sm">16 yaş - Lise 2. Sınıf</p>
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
            Gençlik Döneminde Doğru Tercih!
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Wing Chun ile gençlik döneminin zorluklarını fırsata çevirin. 
            İlk dersi ücretsiz deneyin ve farkı hissedin.
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

export default TeenCourseDetails;