import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import { blogPosts, getAllCategories } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const categories = getAllCategories();

  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="Blog | İzmir Wing Chun - Wing Chun Makaleleri ve Rehberler"
        description="Wing Chun kung fu hakkında kapsamlı makaleler, teknik rehberler ve eğitim yazıları. Wing Chun öğrenme sürecine dair tüm bilgiler burada."
        keywords="wing chun blog, kung fu makaleleri, dövüş sanatları yazıları, wing chun teknikler, martial arts blog"
        ogUrl="https://izmirwingchun.com/blog"
      />

      {/* Hero Section */}
      <section className="bg-custom-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wing Chun Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Wing Chun sanatı hakkında makaleler, rehberler ve deneyimler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              En Son Yazılarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wing Chun kung fusu hakkında derinlemesine yazılar, teknik analizler 
              ve eğitim rehberleri. Hem yeni başlayanlar hem de ileri seviye 
              pratisyenler için değerli içerikler.
            </p>

            {/* Kategori Filtreleri */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post (İlk makale) */}
          {filteredPosts.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-80 lg:h-96">
                    <img 
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-semibold">
                        Öne Çıkan
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {filteredPosts[0].category}
                      </span>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(filteredPosts[0].publishDate).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {filteredPosts[0].readTime} dk
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <User size={16} className="mr-2" />
                        {filteredPosts[0].author}
                      </div>
                      
                      <Link
                        to={`/blog/${filteredPosts[0].slug}`}
                        className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-full font-semibold transition-colors"
                      >
                        Devamını Oku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime} dk
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <User size={14} className="mr-2" />
                      {post.author}
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-800 hover:text-blue-600 font-semibold text-sm transition-colors"
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Boş Durum */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Bu kategoride henüz yazı bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Wing Chun Yazılarımızı Kaçırmayın!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Yeni blog yazılarımızdan haberdar olmak için e-posta listemize katılın. 
              Wing Chun hakkında değerli içerikleri doğrudan size ulaştıralım.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Abone Ol
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-4">
              Spam yapmayız. İstediğiniz zaman aboneliği iptal edebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popüler Etiketler
            </h2>
            <p className="text-lg text-gray-600">
              En çok aranan konular ve etiketler
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
              <span
                key={tag}
                className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
              >
                <Tag size={16} className="mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;