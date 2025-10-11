import { Link } from 'react-router-dom';
import { Users, Clock, Award, ChevronRight, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CoursesPage = () => {
  const courses = [
    {
      id: 'cocuk-grubu',
      title: 'Çocuk Grubu',
      subtitle: '6-13 yaş',
      image: '/izmir-wing-tsung/images/izmir-wing-chun-cocuk-grubu.jpg',
      description: '6-13 yaş arası çocuklar için özel tasarlanmış eğlenceli ve eğitici Wing Chun programı.',
      features: [
        'Eğlenceli oyun temelli öğrenme',
        'Disiplin ve saygı değerlerinin kazanılması',
        'Koordinasyon ve motor beceri geliştirme',
        'Özgüven artırıcı aktiviteler'
      ],
      schedule: 'Cumartesi 12:00 - 14:00 (2 Derslik blok ders)',
      duration: '2 saat',
      price: '300₺/ay',
      level: 'Başlangıç'
    },
    {
      id: 'genc-grubu',
      title: 'Genç Grubu',
      subtitle: '13-18 yaş',
      image: '/izmir-wing-tsung/images/izmir-wing-chun-genc-grubu.jpg',
      description: '13-18 yaş arası gençler için disiplin ve teknik odaklı Wing Chun eğitimi.',
      features: [
        'Disiplin ve odaklanma becerisi',
        'Kendini savunma teknikleri',
        'Stres yönetimi ve mental güç',
        'Akran grupları ile sosyalleşme'
      ],
      schedule: 'Salı & Cuma - 20:00-21:00',
      duration: '60 dakika',
      price: '400₺/ay',
      level: 'Başlangıç-Orta'
    },
    {
      id: 'yetiskin-grubu',
      title: 'Yetişkin Grubu',
      subtitle: '18 yaş ve üzeri',
      image: '/izmir-wing-tsung/images/izmir-wing-chun-yetiskin-grubu.jpg',
      description: '18 yaş üzeri yetişkinler için profesyonel düzeyde Wing Chun öğretimi ve uygulaması.',
      features: [
        'Profesyonel düzeyde teknik eğitim',
        'Geleneksel form ve uygulamalar',
        'Sparring ve pratik çalışmalar',
        'Felsefe ve meditasyon'
      ],
      schedule: 'Pazartesi & Çarşamba - 20:00 - 21:00',
      duration: '60 dakika',
      price: '500₺/ay',
      level: 'Tüm seviyeler'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Wing Chun Kursları | Çocuk, Genç ve Yetişkin Grupları - İzmir"
        description="İzmir'de her yaş grubuna uygun Wing Chun kursları. Çocuk (7-12), Genç (13-17) ve Yetişkin (18+) grupları için profesyonel Wing Chun eğitimi."
        keywords="wing chun kursu, çocuk kung fu, genç kung fu, yetişkin kung fu, izmir dövüş sanatları kursu"
        ogUrl="https://izmirwingchun.com/kurslar"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wing Chun Kurslarımız
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Her yaş grubuna özel hazırlanmış profesyonel Wing Chun eğitim programları
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kurslar"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Kursları İncele
              </a>
              <Link 
                to="/hakkimizda"
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Eğitmenlerimizi Tanıyın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kurslar */}
      <section id="kurslar" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Size Uygun Kursu Seçin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yaş grubunuza ve deneyim seviyenize göre tasarlanmış Wing Chun kurslarımızdan 
              size en uygun olanını seçerek bu eşsiz sanatı öğrenmeye başlayın
            </p>
          </div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <div 
                key={course.id}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Görsel */}
                  <div className="relative h-80 lg:h-96 overflow-hidden lg:rounded-none rounded-t-3xl">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-semibold">
                        {course.level}
                      </div>
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold">
                        {course.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Özellikler */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Kurs Özellikleri:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Star size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Kurs Detayları */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock size={20} className="text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Program</p>
                            <p className="font-semibold text-gray-900">{course.schedule}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users size={20} className="text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Süre</p>
                            <p className="font-semibold text-gray-900">{course.duration}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Award size={20} className="text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Yaş Grubu</p>
                            <p className="font-semibold text-gray-900">{course.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/kurslar/${course.id}`}
                      className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center group"
                    >
                      Detayları Gör
                      <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            İlk Dersiniz Bizden Hediye!
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Wing Chun'u denemek istiyorsanız, ilk dersiniz tamamen ücretsizdir. 
            Hemen rezervasyon yapın ve bu eşsiz sanatla tanışın.
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
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;