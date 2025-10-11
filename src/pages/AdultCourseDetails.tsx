import { Link } from 'react-router-dom';
import { Users, Clock, Award, Shield, Brain, Zap, Star, User, Heart, Target } from 'lucide-react';
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
                src="/izmir-wing-tsung/images/izmir-wing-chun-wtaa-antrenman-1.png"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Öz Savunma</h3>
              <p className="text-gray-600 mb-4">
                Wing Chun, kendini savunmak için son derece pratik ve uygulanabilir bir dövüş sanatıdır. Öğrenilen teknikler gerçekçidir ve acil durumlarda potansiyel saldırganlara karşı kendinizi savunmak için etkili bir şekilde kullanılabilir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Özgüven</h3>
              <p className="text-gray-600 mb-4">
                Wing Tsung öğrencileri sadece kendini savunma sanatını değil, aynı zamanda zorlu durumlarla nasıl başa çıkacaklarını da öğrenirler. Kazanılan özgüven, hayatın çeşitli alanlarında olumlu bir etkiye sahiptir ve öz saygının artmasına yol açar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pratik Uygulanabilirlik</h3>
              <p className="text-gray-600">
                Akrobatik hareketlere veya etkileyici performanslara dayanan bazı geleneksel dövüş sanatlarının aksine Wing-Tsung, gerçek yaşam durumlarında uygulanabilen etkili ve doğrudan tekniklere odaklanır.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Konsantrasyon ve Odaklanma</h3>
              <p className="text-gray-600">
                Wing Tsung prensiplerini etkili bir şekilde uygulamak, yüksek konsantrasyon ve dikkat gerektirir. Bu yoğun zihinsel eğitim, görevlere odaklanma yeteneğini geliştirir ve dikkat dağıtıcı düşünceleri en aza indirir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stres Azaltma</h3>
              <p className="text-gray-600">
                Wing Tsung antrenmanı, stres ve gerginliği azaltmanın bir yolunu sunar. Tekniklere ve hareketlere odaklanmak, sakinleştirici ve meditatif bir etki yaratarak günlük stresle daha iyi başa çıkmanıza yardımcı olabilir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-custom-blue text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tüm Vücut Fitness</h3>
              <p className="text-gray-600 mb-4">
                Wing Tsung antrenmanı, tüm vücudu çalıştıran çeşitli hareketler içerir. Dayanıklılığı, gücü, esnekliği ve koordinasyonu geliştirerek genel fiziksel kondisyonu iyileştirir.
              </p>
              <p className="text-gray-600">
                <strong>Sonuç:</strong> Tüm bu faydalar, Wing Chun'u yaş veya kondisyon seviyesi ne olursa olsun yetişkinler için ödüllendirici ve zenginleştirici bir deneyim haline getirir.
              </p>
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