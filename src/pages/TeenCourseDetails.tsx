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
                src="https://images.pexels.com/photos/7991322/pexels-photo-7991322.jpeg"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kendini Savunma</h3>
              <p className="text-gray-600">
                Praktik ve etkili Wing Chun teknikleri ile gençler kendilerini 
                güvende hissederler ve zorbalık gibi durumlarla başa çıkabilirler.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stres Yönetimi</h3>
              <p className="text-gray-600">
                Wing Chun'un meditasyon ve nefes teknikleri sayesinde gençler 
                okul stresi ve sosyal baskılarla daha iyi başa çıkar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Öz Disiplin</h3>
              <p className="text-gray-600">
                Düzenli antrenmanlar ve geleneksel değerler sayesinde gençler 
                öz disiplin kazanır ve hedeflerine odaklanmayı öğrenirler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Programı */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Genç Dostu Eğitim Programı
            </h2>
            <p className="text-xl text-gray-600">
              Gençlerin ilgisini çekecek dinamik ve etkili müfredat
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Seviye 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Temel Teknikler ve Felsefe (1-4. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fiziksel Teknikler:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Wing Chun duruş ve dengesini kurma</li>
                          <li>• Temel el teknikleri (Tan Sao, Bong Sao)</li>
                          <li>• Merkez çizgi teorisi</li>
                          <li>• Temel savunma pozisyonları</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Mental Gelişim:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Wing Chun felsefesi ve tarihi</li>
                          <li>• Konsantrasyon ve odaklanma</li>
                          <li>• Sakinlik altında kalma</li>
                          <li>• Takım çalışması ve empati</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seviye 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Gelişmiş Teknikler ve Uygulamalar (5-8. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">İleri Teknikler:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Chi Sao (Yapışkan eller) temelleri</li>
                          <li>• Kombine savunma-saldırı</li>
                          <li>• Ayak çalışması ve mesafe</li>
                          <li>• Pratik kendini savunma senaryoları</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Karakter Gelişimi:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Liderlik becerileri</li>
                          <li>• Çatışma çözme teknikleri</li>
                          <li>• Öz güven inşası</li>
                          <li>• Sorumluluk alma</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seviye 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Uzmanlık ve Öğretmenlik (9-12. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Uzman Seviye:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Sil Lim Tau form çalışması</li>
                          <li>• İleri Chi Sao teknikleri</li>
                          <li>• Serbest sparring</li>
                          <li>• Küçük gruplara öğretmenlik</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Yaşam Becerileri:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Hedef belirleme ve planlama</li>
                          <li>• Zaman yönetimi</li>
                          <li>• İletişim becerileri</li>
                          <li>• Kendini geliştirme alışkanlığı</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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