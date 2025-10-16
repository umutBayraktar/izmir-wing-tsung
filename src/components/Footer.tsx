import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/izmir-wing-tsung/images/wing-tsung-sanat-dernegi-logo.webp"
                  alt="İzmir Wing Chun Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">İzmir Wing Chun</h3>
                <p className="text-gray-400 text-sm">Geleneksel Kung Fu Sanatı</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              İzmir'de geleneksel Wing Chun Kung Fu eğitimi veren deneyimli eğitmen kadromuzla 
              sanat dalının inceliklerini öğrenin ve kendinizi geliştirin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-500">Hızlı Bağlantılar</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Ana Sayfa
              </Link>
              <Link to="/kurslar" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Kurslar
              </Link>
              <Link to="/hakkimizda" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Hakkımızda
              </Link>
              <Link to="/galeri" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Galeri
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Kurslar */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-500">Kurslarımız</h4>
            <div className="space-y-2">
              <Link to="/kurslar/cocuk-grubu" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Çocuk Grubu (5-13 yaş)
              </Link>
              <Link to="/kurslar/genc-grubu" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Genç Grubu (13-18 yaş)
              </Link>
              <Link to="/kurslar/yetiskin-grubu" className="block text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                Yetişkin Grubu (18 yaş ve üzeri)
              </Link>
            </div>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-500">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Mimar Sinan mah, Alsancak<br />
                  1408. Sk. Hacı Bey apt no:6 D:1<br />
                  35220 Konak, İzmir
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+90 507 419 50 13</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@izmirwingchun.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Pazartesi : 06:00-22:00</p>
                  <p>Salı : 06:00-22:00</p>
                  <p>Çarşamba : 06:00-22:00</p>
                  <p>Perşembe : 06:00-22:00</p>
                  <p>Cuma : 06:00-22:00</p>
                  <p>Cumartesi : 06:00-22:00</p>
                  <p>Pazar : Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 İzmir Wing Chun. Tüm hakları saklıdır. | 
            <Link to="/gizlilik" className="hover:text-yellow-500 transition-colors ml-1">
              Gizlilik Politikası
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;