import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = 'İzmir Wing Chun - Geleneksel Kung Fu Eğitimi',
  description = 'İzmir\'de profesyonel Wing Chun Kung Fu eğitimi. Çocuk, genç ve yetişkin grupları için uygun fiyatlı kurslar. Deneyimli eğitmenlerle geleneksel dövüş sanatını öğrenin.',
  keywords = 'izmir wing chun, kung fu izmir, dövüş sanatları izmir, wing chun eğitimi, çocuk kung fu, yetişkin kung fu',
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogUrl = 'https://izmirwingchun.com',
  canonicalUrl,
  structuredData
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;