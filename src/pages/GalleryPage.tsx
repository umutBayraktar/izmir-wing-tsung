import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: '/izmir-wing-tsung/images/gallery/wtaa-seminer-afis.png',
      title: 'WTAA Izmir Wing Chun Semineri',
      category: 'Etkinlikler'
    },
    {
      id: 2,
      src: '/izmir-wing-tsung/images/gallery/wtaa-seminer-2.png',
      title: 'WTAA Izmir Wing Chun Semineri',
      category: 'Etkinlikler'
    },
    {
      id: 3,
      src: '/izmir-wing-tsung/images/gallery/wtaa-seminer-3.png',
      title: 'WTAA Izmir Wing Chun Semineri',
      category: 'Etkinlikler'
    },
    {
      id: 4,
      src: '/izmir-wing-tsung/images/gallery/wtaa-seminer-4.png',
      title: 'WTAA Izmir Wing Chun Semineri'  ,
      category: 'Etkinlikler'
    },
    {
      id: 5,
      src: '/izmir-wing-tsung/images/izmir-wing-chun-wing-chun-egitimi.png',
      title: 'Partner Egzersizleri',
      category: 'Teknikler'
    },
    {
      id: 6,
      src: '/izmir-wing-tsung/images/gallery/wtaa-seminer-5.png',
      title: 'Partner Egzersizleri',
      category: 'Teknikler'
    },
    {
      id: 7,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-antrenman-1.png',
      title: 'Yetişkin Grubu Antrenmanı',
      category: 'Antrenmanlar'
    },
    {
      id: 8,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-antrenman-2.png',
      title: 'Serbest Dövüş Antremanları',
      category: 'Antrenmanlar'
    },
    {
      id: 9,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-antrenman-3.png',
      title: 'Lap-sao Çalışması',
      category: 'Antrenmanlar'
    },
    {
      id: 10,
      src: '/izmir-wing-tsung/images/gallery/wtaa-seminer-2.jpeg',
      title: 'WTAA Izmir Wing Chun Semineri',
      category: 'Etkinlikler'
    },
    {
      id: 11,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-antrenman-4.jpeg',
      title: 'Tekme Çalışması',
      category: 'Antrenmanlar'
    },
    {
      id: 13,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-seminer-bicaga-karsi-savunma-2.jpeg',
      title: 'Bıçağa Karşı Savunma',
      category: 'Antrenmanlar'
    },
    {
      id: 14,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-sopaya-karsi-mudahale.jpeg',
      title: 'Sopaya Karşı Müdahale',
      category: 'Teknikler'
    },
    {
      id: 15,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-seminer-3.jpeg',
      title: 'WTAA Izmir Wing Chun Semineri',
      category: 'Etkinlikler'
    },
    {
      id: 16,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-bicaga-karsi-savunma.jpeg',
      title: 'Bıçağa Karşı Savunma',
      category: 'Teknikler'
    },
    {
      id: 17,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-sopaya-karsi-mudahale-2.jpeg',
      title: 'Sopaya Karşı Müdahale',
      category: 'Teknikler'
    },
    {
      id: 18,
      src: '/izmir-wing-tsung/images/gallery/izmir-wing-chun-wtaa-seminer-5.jpeg',
      title: 'WTAA Izmir Wing Chun Semineri',
      category: 'Etkinlikler'
    },

  ];

  const categories = ['Tümü', 'Antrenmanlar', 'Teknikler', 'Etkinlikler'];
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredImages = activeCategory === 'Tümü' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <>
      <SEOHead 
        title="Galeri | İzmir Wing Chun - Antrenman ve Etkinlik Fotoğrafları"
        description="İzmir Wing Chun derslerinden, antrenmanlardan ve etkinliklerden fotoğraflar. Çocuk, genç ve yetişkin grubu derslerimizi inceleyin."
        keywords="wing chun fotoğraflar, izmir wing chun galeri, kung fu antrenman, dövüş sanatları fotoğraf"
        ogUrl="https://izmirwingchun.com/galeri"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Galeri
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Antrenmanlarımız ve etkinliklerimizden kareler
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fotoğraf Koleksiyonumuz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wing Chun derslerimizden, seminerlerimizden ve özel etkinliklerimizden 
              anlık kareler. Öğrencilerimizin gelişim sürecini ve topluluğumuzun 
              ruhunu bu fotoğraflarda görebilirsiniz.
            </p>

            {/* Kategori Filtreleri */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    activeCategory === category
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Fotoğraf Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-w-4 aspect-h-3 relative h-64">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                      <p className="text-lg font-semibold mb-2">{image.title}</p>
                      <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Boş Durum */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Bu kategoride henüz fotoğraf bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl max-h-screen m-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-screen object-contain"
            />
            
            {/* Başlık ve Kategori */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="text-xl font-semibold mb-1">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {filteredImages[selectedImage].category}
              </p>
            </div>

            {/* Kapatma Butonu */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigasyon Okları */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            {/* Sayfa Göstergesi */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Siz de Bizimle Wing Chun Öğrenin!
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Bu fotoğraflarda gördüğünüz atmosferin bir parçası olmak istemez misiniz? 
            Hemen kursa katılın ve Wing Chun ailesine katılın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905321234567"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Hemen Ara: +90 507 419 50 13
            </a>
            <a 
              href="/kurslar"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Kursları İncele
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;