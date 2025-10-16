import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-gray-200" style={{ backgroundColor: '#fdc300' }}>
              <img
                src="/izmir-wing-tsung/images/wing-tsung-sanat-dernegi-logo.webp"
                alt="İzmir Wing Chun Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="block">
              <h1 className="text-blue-800 font-bold text-lg sm:text-xl">İzmir Wing Chun - WTAA</h1>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">Wing Chun Kung Fu Sanatı</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-yellow-500 ${
                isActive('/') ? 'text-yellow-500' : 'text-gray-700'
              }`}
            >
              Ana Sayfa
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium text-gray-700 group-hover:text-yellow-500 transition-colors">
                <span>Kurslar</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/kurslar"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                >
                  Tüm Kurslar
                </Link>
                <Link
                  to="/kurslar/cocuk-grubu"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                >
                  Çocuk Grubu
                </Link>
                <Link
                  to="/kurslar/genc-grubu"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                >
                  Genç Grubu
                </Link>
                <Link
                  to="/kurslar/yetiskin-grubu"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                >
                  Yetişkin Grubu
                </Link>
              </div>
            </div>

            <Link
              to="/hakkimizda"
              className={`font-medium transition-colors hover:text-yellow-500 ${
                isActive('/hakkimizda') ? 'text-yellow-500' : 'text-gray-700'
              }`}
            >
              Hakkımızda
            </Link>
            
            <Link
              to="/galeri"
              className={`font-medium transition-colors hover:text-yellow-500 ${
                isActive('/galeri') ? 'text-yellow-500' : 'text-gray-700'
              }`}
            >
              Galeri
            </Link>
            
            <Link
              to="/blog"
              className={`font-medium transition-colors hover:text-yellow-500 ${
                isActive('/blog') ? 'text-yellow-500' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/kurslar"
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Kursa Başla
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-yellow-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link
                to="/"
                className={`block font-medium transition-colors ${
                  isActive('/') ? 'text-yellow-500' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              
              <div>
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center justify-between w-full font-medium text-gray-700"
                >
                  <span>Kurslar</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      isCoursesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isCoursesOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link
                      to="/kurslar"
                      className="block text-gray-600 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tüm Kurslar
                    </Link>
                    <Link
                      to="/kurslar/cocuk-grubu"
                      className="block text-gray-600 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Çocuk Grubu
                    </Link>
                    <Link
                      to="/kurslar/genc-grubu"
                      className="block text-gray-600 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Genç Grubu
                    </Link>
                    <Link
                      to="/kurslar/yetiskin-grubu"
                      className="block text-gray-600 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Yetişkin Grubu
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/hakkimizda"
                className={`block font-medium transition-colors ${
                  isActive('/hakkimizda') ? 'text-yellow-500' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              
              <Link
                to="/galeri"
                className={`block font-medium transition-colors ${
                  isActive('/galeri') ? 'text-yellow-500' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </Link>
              
              <Link
                to="/blog"
                className={`block font-medium transition-colors ${
                  isActive('/blog') ? 'text-yellow-500' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/kurslar"
                className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kursa Başla
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;