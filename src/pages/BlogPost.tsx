import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ChevronLeft, Share2 } from 'lucide-react';
import { getPostBySlug, blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog yazısı bulunamadı.</p>
          <Link 
            to="/blog"
            className="bg-custom-blue hover:bg-custom-blue-hover text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Bloga Dön
          </Link>
        </div>
      </div>
    );
  }

  // İlgili yazıları bul (aynı kategori, farklı ID)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Markdown benzeri içeriği JSX'e çevir (basit implementasyon)
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">{line.substring(4)}</h3>;
      }
      if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-4">{line.substring(5)}</h4>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-700 mb-1">{line.substring(2)}</li>;
      }
      if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
        const match = line.match(/^\d+\. (.+)/);
        return <li key={index} className="text-gray-700 mb-1">{match ? match[1] : line}</li>;
      }
      if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.length > 0 && !line.startsWith('#') && !line.startsWith('-') && !line.match(/^\d+\./)) {
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  return (
    <>
      <SEOHead 
        title={`${post.title} | İzmir Wing Chun Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogUrl={`https://izmirwingchun.com/blog/${post.slug}`}
        ogImage={post.image}
      />

      {/* Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-800 hover:text-blue-600 font-semibold transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Bloga Dön
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {new Date(post.publishDate).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime} dakika okuma
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Article Image */}
            <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Paylaş:</span>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-colors">
                <Share2 size={16} />
                <span>Facebook</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-300 text-white px-4 py-2 rounded-full transition-colors">
                <Share2 size={16} />
                <span>Twitter</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition-colors">
                <Share2 size={16} />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-3">
                <span className="font-semibold text-gray-700">Etiketler:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-100 transition-colors"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{post.author}</h4>
                  <p className="text-gray-600">
                    {post.author.includes('Sifu') ? 'Başeğitmen' : 'Eğitmen'} - İzmir Wing Chun Sanat Derneği
                  </p>
                  <p className="text-gray-700 mt-2">
                    Wing Chun sanatının geleneksel değerlerini modern eğitim teknikleri ile harmanlayan deneyimli eğitmen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                İlgili Yazılar
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                        <div className="flex items-center">
                          <Clock size={12} className="mr-1" />
                          {relatedPost.readTime} dk
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                      
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-blue-800 hover:text-blue-600 font-semibold text-sm transition-colors"
                      >
                        Devamını Oku →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Wing Chun Öğrenmeye Başlayın!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Bu yazıda okuduklarınızı pratikte deneyimlemek ister misiniz? 
              Wing Chun kurslarımıza katılın ve bu güzel sanatı öğrenin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/kurslar"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Kurslara Katıl
              </Link>
              <Link 
                to="/hakkimizda"
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Bizi Tanıyın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;