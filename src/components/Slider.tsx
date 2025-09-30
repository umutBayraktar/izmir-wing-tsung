import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/izmir-wtaa.JPG',
    title: 'Wing Chun Sanatını Öğrenin',
    description: 'Geleneksel Çin dövüş sanatı Wing Chun ile kendinizi geliştirin',
    cta: 'Kursa Başlayın'
  },
  {
    id: 2,
    image: '/images/izmir-wing-chun-kursu.JPG',
    title: 'Deneyimli Eğitmenler',
    description: 'Uzman eğitmenlerimizle Wing Chun\'un inceliklerini keşfedin',
    cta: 'Eğitmenlerimizi Tanıyın'
  },
  {
    id: 3,
    image: '/images/izmir-wtaa.JPG',
    title: 'Her Yaşa Uygun Kurslar',
    description: 'Çocuk, genç ve yetişkin gruplarımızla herkese uygun eğitim',
    cta: 'Kursları İnceleyin'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors">
                    {slide.cta}
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    <Play size={20} />
                    <span>Tanıtım Videosunu İzle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors"
      >
        <ChevronRight size={48} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;