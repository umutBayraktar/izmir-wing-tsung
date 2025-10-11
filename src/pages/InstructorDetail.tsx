import { useParams, Link } from 'react-router-dom';
import { Award, Clock, Users, BookOpen, Target, Quote } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getInstructorById } from '../data/instructors';

const InstructorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const instructor = id ? getInstructorById(id) : undefined;

  if (!instructor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eğitmen Bulunamadı</h1>
          <p className="text-xl text-gray-600 mb-8">Aradığınız eğitmen sayfası mevcut değil.</p>
          <Link 
            to="/hakkimizda"
            className="bg-custom-blue hover:bg-custom-blue-hover text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Eğitmen Kadromuza Dönün
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${instructor.name} | İzmir Wing Chun Eğitmeni`}
        description={`${instructor.name} - ${instructor.title}. ${instructor.shortDescription} Wing Chun eğitimi hakkında detaylı bilgi.`}
        keywords={`${instructor.name}, wing chun eğitmeni izmir, ${instructor.title.toLowerCase()}, wing chun dersi`}
        ogUrl={`https://umutbayraktar.github.io/izmir-wing-tsung/#/egitmen/${instructor.id}`}
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`${instructor.titleColor} bg-white px-6 py-2 rounded-full font-semibold inline-block mb-6`}>
                  {instructor.title}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {instructor.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  {instructor.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
                    <div className="flex items-center text-blue-100">
                      <Award size={20} className="mr-2" />
                      <span>{instructor.level}</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
                    <div className="flex items-center text-blue-100">
                      <Clock size={20} className="mr-2" />
                      <span>{instructor.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Uzmanlık Alanları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructor.specialties.map((specialty, index) => (
                <div key={index} className="bg-gradient-to-r from-custom-blue to-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <Target size={24} className="mr-3 text-yellow-400" />
                    <h3 className="font-semibold">{specialty}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Biyografi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Biyografi
            </h2>
            <div className="space-y-6">
              {instructor.biography.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Başarılar ve Sertifikalar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Başarılar ve Sertifikalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructor.achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                  <div className="flex items-center">
                    <Award size={24} className="mr-3 text-yellow-500" />
                    <h3 className="font-semibold text-gray-900">{achievement}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verdiği Kurslar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Verdiği Kurslar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {instructor.courses.map((course, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <BookOpen size={32} className="mr-4 text-custom-blue" />
                    <h3 className="text-2xl font-bold text-gray-900">{course}</h3>
                  </div>
                  <p className="text-gray-600">
                    {instructor.name} tarafından verilen profesyonel Wing Chun eğitimi
                  </p>
                  <div className="mt-6">
                    <a 
                      href="https://wa.me/905074195013?text=Kurslarınız%20hakkında%20bilgi%20almak%20istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block"
                    >
                      Bilgi Al
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Felsefesi */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={48} className="mx-auto mb-8 text-yellow-400" />
            <h2 className="text-4xl font-bold mb-8">
              Eğitim Felsefesi
            </h2>
            <blockquote className="text-xl md:text-2xl text-blue-100 italic leading-relaxed">
              "{instructor.philosophy}"
            </blockquote>
            <div className="mt-8">
              <p className="text-yellow-400 font-semibold">- {instructor.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {instructor.name} ile Wing Chun Öğrenin
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Deneyimli eğitmenimizle Wing Chun'un inceliklerini öğrenin. 
            İlk dersiniz tamamen ücretsiz!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/905074195013?text=Kurslarınız%20hakkında%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              WhatsApp ile İletişim
            </a>
            <a 
              href="tel:+905074195013"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Hemen Ara: +90 507 419 50 13
            </a>
          </div>
          <div className="mt-8">
            <Link 
              to="/hakkimizda"
              className="text-gray-700 hover:text-gray-900 font-semibold underline"
            >
              ← Diğer Eğitmenlerimizi Görün
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorDetail;
