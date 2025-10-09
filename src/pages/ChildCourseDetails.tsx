import { Link } from 'react-router-dom';
import { Users, Clock, Award, Heart, Shield, Target, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ChildCourseDetails = () => {
  return (
    <>
      <SEOHead 
        title="Çocuk Wing Chun Kursu (6-13 yaş) | İzmir Wing Chun"
        description="6-13 yaş çocuklar için özel tasarlanmış Wing Chun kursu. Eğlenceli öğrenme, disiplin ve motor beceri geliştirme. İlk ders ücretsiz!"
        keywords="çocuk wing chun, çocuk kung fu izmir, 6-13 yaş dövüş sanatı, çocuk sporu izmir"
        ogUrl="https://izmirwingchun.com/kurslar/cocuk-grubu"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold inline-block mb-6">
              6-13 Yaş Grubu
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
                  <p className="text-gray-700">6-13 yaş</p>
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
                src="https://images.pexels.com/photos/8611192/pexels-photo-8611192.jpeg"
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

      {/* Program Faydaları */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Çocuğunuzun Gelişimine Katkılar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wing Chun eğitimi çocuğunuzun fiziksel, mental ve sosyal gelişiminde 
              önemli faydalar sağlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Özgüven Geliştirme</h3>
              <p className="text-gray-600">
                Wing Chun teknikleri öğrenen çocuklar kendilerini daha güvende hisseder 
                ve özgüvenleri artar. Bu da sosyal ilişkilerinde olumlu etki yapar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disiplin & Saygı</h3>
              <p className="text-gray-600">
                Geleneksel dövüş sanatlarının temel değerleri olan disiplin, saygı ve 
                sorumluluk bilinciyle çocuğunuz daha dengeli bir kişilik geliştirir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Odaklanma</h3>
              <p className="text-gray-600">
                Wing Chun pratikleri çocuğun konsantrasyon ve odaklanma becerisini 
                geliştirir. Bu okul başarısına da olumlu yansır.
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
              Eğitim Programımız
            </h2>
            <p className="text-xl text-gray-600">
              Çocuklara özel hazırlanmış eğlenceli ve etkili müfredat
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
                      Temel Duruş ve Hareket (1-3. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fiziksel Gelişim:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Temel Wing Chun duruşu</li>
                          <li>• Denge ve koordinasyon</li>
                          <li>• Basit el teknikleri</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Mental Gelişim:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Dikkat ve konsantrasyon</li>
                          <li>• Takım çalışması</li>
                          <li>• Temel saygı kuralları</li>
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
                      Temel Teknikler (4-6. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Teknik Gelişim:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Basit savunma teknikleri</li>
                          <li>• El-göz koordinasyonu</li>
                          <li>• Nefes teknikleri</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Sosyal Gelişim:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Grup çalışmaları</li>
                          <li>• Empati geliştirme</li>
                          <li>• Problem çözme</li>
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
                      İleri Teknikler (7-12. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gelişmiş Teknikler:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Kombine hareketler</li>
                          <li>• Temel form çalışması</li>
                          <li>• Partner egzersizleri</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Kişilik Gelişimi:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Liderlik becerileri</li>
                          <li>• Özgüven pekiştirme</li>
                          <li>• Hedef belirleme</li>
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

      {/* Veli Yorumları */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Velilerimizin Yorumları
            </h2>
            <p className="text-xl text-blue-100">
              Çocuklarını bizden Wing Chun eğitimi alan velilerimizin deneyimleri
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
                "Oğlum 8 yaşında kursa başladı. 6 ayda çok büyük değişim gördük. 
                Hem fiziksel olarak güçlendi hem de okuldaki davranışları çok daha olumlu oldu. 
                Eğitmenler gerçekten çocuklarla çok iyi iletişim kuruyor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  AY
                </div>
                <div>
                  <h4 className="font-semibold">Ayşe Yılmaz</h4>
                  <p className="text-blue-200 text-sm">Eren'in Annesi (8 yaş)</p>
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
                "Kızım çok çekingen bir çocuktu. Wing Chun sayesinde özgüveni arttı, 
                arkadaşlarıyla daha iyi iletişim kurmaya başladı. Artık daha cesur 
                ve kendinden emin. Teşekkürler!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-semibold">Mehmet Kara</h4>
                  <p className="text-blue-200 text-sm">Elif'in Babası (10 yaş)</p>
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