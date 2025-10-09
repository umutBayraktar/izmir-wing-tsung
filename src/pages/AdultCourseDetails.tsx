import { Link } from 'react-router-dom';
import { Users, Clock, Award, Shield, Brain, Zap, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AdultCourseDetails = () => {
  return (
    <>
      <SEOHead 
        title="Yetişkin Wing Chun Kursu (18+ yaş) | İzmir Wing Chun"
        description="18 yaş üzeri yetişkinler için profesyonel Wing Chun kursu. Kendini savunma, stres yönetimi ve fiziksel kondisyon. Geleneksel Çin dövüş sanatı eğitimi."
        keywords="yetişkin wing chun, yetişkin kung fu izmir, kendini savunma kursu, stres yönetimi, fiziksel kondisyon"
        ogUrl="https://izmirwingchun.com/kurslar/yetiskin-grubu"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold inline-block mb-6">
              18 Yaş ve Üzeri
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Yetişkin Wing Chun Kursu
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Profesyonel Wing Chun eğitimi ile kendinizi geliştirin
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
                Yetişkinler İçin Profesyonel Eğitim
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                18 yaş üstü yetişkinler için tasarlanan Wing Chun programımız, 
                geleneksel tekniklerin yanı sıra modern yaşamın gereksinimlerine 
                yönelik pratik uygulamalar içerir.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <Users className="text-yellow-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Yaş Grubu</h3>
                  <p className="text-gray-700">18 yaş ve üzeri</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Clock className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Ders Saatleri</h3>
                  <p className="text-gray-700">Pzt & Çar<br />20:00-21:00</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Award className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Seviye</h3>
                  <p className="text-gray-700">Tüm Seviyeler</p>
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
                src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
                alt="Yetişkin Wing Chun Eğitimi"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-gray-900 p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">İlk Ders</p>
                <p className="text-xl font-bold">ÜCRETSİZ!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yetişkinler İçin Faydalar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Yetişkin Yaşamında Wing Chun'un Faydaları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern yaşamın stres ve zorluklarıyla başa çıkmak için Wing Chun'un 
              sunduğu eşsiz avantajlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Etkili Savunma</h3>
              <p className="text-gray-600">
                Pratik ve gerçekçi kendini savunma teknikleri ile günlük hayatta 
                karşılaşabileceğiniz tehlikeli durumlara hazır olun.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stres Yönetimi</h3>
              <p className="text-gray-600">
                Wing Chun'un meditasyon teknikleri ve nefes çalışmaları ile 
                iş yaşamının stresini azaltın ve mental dengeyi koruyun.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiziksel Kondisyon</h3>
              <p className="text-gray-600">
                Düzenli Wing Chun antrenmanları ile kardiyovasküler sağlığınızı 
                koruyun, esneklik kazanın ve kas gücünüzü artırın.
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
              Kapsamlı Eğitim Programımız
            </h2>
            <p className="text-xl text-gray-600">
              Başlangıçtan uzman seviyeye kadar sistematik Wing Chun eğitimi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Başlangıç */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Başlangıç Seviyesi (1-6. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Temel Teknikler:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Wing Chun duruş ve temel pozisyonlar</li>
                          <li>• Merkez çizgi teorisi ve uygulaması</li>
                          <li>• Temel el teknikleri (Pak, Tan, Bong Sao)</li>
                          <li>• Nefes teknikleri ve konsantrasyon</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Felsefe ve Mental:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Wing Chun tarihi ve felsefesi</li>
                          <li>• Sakin kalma teknikleri</li>
                          <li>• Zihninsel odaklanma</li>
                          <li>• Stres azaltma yöntemleri</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orta Seviye */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Orta Seviye (7-12. Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">İleri Teknikler:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Chi Sao (Yapışkan eller) çalışması</li>
                          <li>• Sil Lim Tau form eğitimi</li>
                          <li>• Savunma-saldırı kombinasyonları</li>
                          <li>• Mesafe kontrolü ve timing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Pratik Uygulamalar:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Gerçekçi kendini savunma senaryoları</li>
                          <li>• Partner egzersizleri</li>
                          <li>• Refleks geliştirme çalışmaları</li>
                          <li>• Kontrollü sparring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* İleri Seviye */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      İleri Seviye (13+ Ay)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Uzman Teknikleri:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Chum Kiu form ve uygulamaları</li>
                          <li>• İleri Chi Sao teknikleri</li>
                          <li>• Serbest dövüş (Lat Sao)</li>
                          <li>• Silah formları (Mook Jong)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Öğretmenlik:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Yeni öğrencilere yardım</li>
                          <li>• Teknik analizi ve düzeltme</li>
                          <li>• Liderlik becerileri</li>
                          <li>• Eğitmenlik sertifikası</li>
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

      {/* Başarı Hikayeleri */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Yetişkin Öğrencilerimizin Başarı Hikayeleri
            </h2>
            <p className="text-xl text-blue-100">
              Wing Chun ile hayatlarını değiştiren öğrencilerimizin deneyimleri
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
                "İş stresimle başa çıkmakta zorlanıyordum. Wing Chun sayesinde hem 
                fiziksel hem de mental olarak güçlendim. Artık daha sakin ve odaklıyım. 
                2 yıldır antrenman yapıyorum ve harika hissediyorum."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-semibold">Mehmet Kaya</h4>
                  <p className="text-blue-200 text-sm">32 yaş - Yazılım Mühendisi</p>
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
                "Kadın olarak kendimi güvende hissetmek istiyordum. Wing Chun 
                bana gerçekten etkili savunma teknikleri öğretti. Özgüvenim çok arttı 
                ve artık her ortamda rahatım."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                  SY
                </div>
                <div>
                  <h4 className="font-semibold">Selin Yılmaz</h4>
                  <p className="text-blue-200 text-sm">28 yaş - Öğretmen</p>
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
            Hayatınızı Değiştirmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Wing Chun ile kendinizi geliştirin, stresle başa çıkın ve güçlü bir birey olun. 
            İlk dersiniz tamamen ücretsiz!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905074195013"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Hemen Ara: +90 507 419 50 13
            </a>
            <Link 
              to="/hakkimizda"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Eğitmenlerimizi Tanıyın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdultCourseDetails;