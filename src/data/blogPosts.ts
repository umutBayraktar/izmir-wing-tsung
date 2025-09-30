export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  tags: string[];
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'wing-chun-nedir-nasil-ogrenilir',
    title: 'Wing Chun Nedir ve Nasıl Öğrenilir?',
    excerpt: 'Wing Chun kung fuunun temel prensipleri, tarihi ve öğrenme süreci hakkında kapsamlı bir rehber.',
    content: `
# Wing Chun Nedir?

Wing Chun, Çin'in güneyinden köken alan geleneksel bir kung fu stilidır. Bu benzersiz dövüş sanatı, basitlik, directness (doğrudanlık) ve efficiency (verimlilik) prensiplerine dayanır.

## Wing Chun'un Tarihi

Wing Chun'un kökleri 18. yüzyıla dayanır. Efsaneye göre, bu sanat Ng Mui adlı bir Shaolin rahibesi tarafından geliştirilmiş ve ilk öğrencisi Yim Wing Chun'a öğretilmiştir. Sanatın adı da buradan gelmektedir.

## Temel Prensipler

### 1. Merkez Çizgi Teorisi
Wing Chun'un en önemli konseptlerinden biri merkez çizgi teorisidir. Bu teori, vücudun merkezindeki hayali çizgiyi koruma ve rakibin merkez çizgisini kontrol etme üzerine kuruludur.

### 2. Ekonomi Prensibi
Wing Chun, minimum effort ile maximum efficiency prensibi ile çalışır. Gereksiz hareketler yerine en kısa ve etkili yolu tercih eder.

### 3. Simultaneous Attack and Defense
Wing Chun'da savunma ve saldırı eş zamanlı olarak yapılır. Bu, zamanı en verimli şekilde kullanmanın yoludur.

## Wing Chun Nasıl Öğrenilir?

### Başlangıç Aşaması
- **Duruş ve Pozisyon**: Wing Chun'a özel YJKYM (Yee Jee Kim Yeung Ma) duruşunu öğrenmek
- **Temel El Teknikleri**: Pak Sao, Tan Sao, Bong Sao gibi temel teknikleri kavramak
- **Merkez Çizgi Farkındalığı**: Vücut mekaniğini anlamak

### Orta Seviye
- **Chi Sao (Yapışkan Eller)**: Wing Chun'un kalbi olan bu egzersizi öğrenmek
- **Sil Lim Tau**: İlk form çalışması
- **Footwork**: Ayak çalışması ve mesafe kontrolü

### İleri Seviye
- **Chum Kiu**: İkinci form
- **Biu Jee**: Üçüncü ve son el formu
- **Mook Jong**: Ahşap kukla çalışması
- **Lok Dim Boon Gwan**: Uzun sopa formu
- **Bart Cham Dao**: İkiz kelebek kılıç formu

## Öğrenme Sürecinde Dikkat Edilmesi Gerekenler

1. **Sabırlı Olmak**: Wing Chun derinliği olan bir sanattır ve ustalaşmak zaman alır.
2. **Düzenli Antrenman**: Haftada en az 2-3 kez düzenli antrenman yapmak önemlidir.
3. **Doğru Eğitmen**: Kaliteli bir eğitmen bulmak öğrenme sürecini hızlandırır.
4. **Mental Gelişim**: Fiziksel tekniklerin yanında Wing Chun'un felsefesini de anlamak gerekir.

## Wing Chun'un Faydaları

### Fiziksel Faydalar
- Koordinasyon gelişimi
- Denge ve stabilite artışı
- Esneklik ve güç gelişimi
- Refleks hızında artış

### Mental Faydalar
- Konsantrasyon artışı
- Stres azalması
- Özgüven gelişimi
- Mental disiplin

## Sonuç

Wing Chun, sadece bir dövüş sanatı değil, aynı zamanda bir yaşam felsefesidir. Doğru öğrenildiğinde hem fiziksel hem de mental gelişim sağlar. İzmir Wing Chun Sanat Derneği olarak, bu güzel sanatı öğrenmek isteyenlere her türlü desteği vermeye hazırız.

Unutmayın, her uzman bir zamanlar başlangıçtı. Wing Chun yolculuğunuza başlamak için asla geç değil!
    `,
    author: 'Sifu Ali Demir',
    publishDate: '2024-01-15',
    category: 'Eğitim',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    tags: ['Wing Chun', 'Başlangıç', 'Eğitim', 'Kung Fu'],
    readTime: 8
  },
  {
    id: '2',
    slug: 'cocuklar-icin-wing-chun-faydaları',
    title: 'Çocuklar İçin Wing Chun\'un Faydaları',
    excerpt: 'Wing Chun eğitiminin çocukların fiziksel, mental ve sosyal gelişimine olan olumlu etkilerini keşfedin.',
    content: `
# Çocuklar İçin Wing Chun'un Faydaları

Günümüz dünyasında çocuklar teknoloji ile çok fazla zaman geçiriyor ve fiziksel aktivitelerden uzaklaşıyorlar. Wing Chun, çocuklar için mükemmel bir alternatif sunar. Bu yazıda Wing Chun'un çocuklar üzerindeki olumlu etkilerini inceleyeceğiz.

## Fiziksel Gelişim Faydaları

### Koordinasyon ve Denge
Wing Chun, çocukların koordinasyon ve denge becerilerini geliştirmede çok etkilidir. Özellikle 7-12 yaş grubundaki çocuklarda motor becerilerin gelişimi için ideal bir aktivitedir.

### Esneklik ve Güç
- **Esneklik**: Wing Chun'un yumuşak hareketleri çocukların esnekliğini artırır
- **Çekirdek Gücü**: Merkez çizgi çalışmaları karın ve sırt kaslarını güçlendirir
- **Genel Kondisyon**: Düzenli antrenmanlar çocukların genel fiziksel kondisyonunu iyileştirir

## Mental ve Duygusal Faydalar

### Konsantrasyon Artışı
Wing Chun, çocukların dikkat süresini uzatır ve konsantrasyon becerilerini geliştirir. Bu da okul başarısına doğrudan etki eder.

### Özgüven Gelişimi
- Teknik öğrendikçe özgüven artar
- Başarı hissi motivasyonu yükseltir
- Kendini ifade etme becerileri gelişir

### Disiplin ve Saygı
Wing Chun'un geleneksel değerleri çocuklara:
- **Öz disiplin** kazandırır
- **Büyüklere saygı** öğretir
- **Sabır ve azim** geliştirir

## Sosyal Gelişim

### Takım Çalışması
Wing Chun partner egzersizleri ile çocuklar:
- İş birliği yapmayı öğrenir
- Empati geliştirir
- Sosyalleşme becerileri kazanır

### Liderlik Becerileri
İleri seviye çocuklar yeni başlayanlara yardım ederek liderlik becerilerini geliştirir.

## Güvenlik ve Kendini Savunma

### Farkındalık
Wing Chun çocuklara çevresel farkındalık kazandırır ve potansiel tehlikeleri önceden fark etmelerini sağlar.

### Kendini Savunma
- **Kaçınma stratejileri** öğretir
- **Temel savunma teknikleri** kazandırır
- **Ne zaman yardım isteyeceğini** öğretir

## Yaş Gruplarına Göre Faydalar

### 7-9 Yaş Grubu
- Temel motor becerilerin gelişimi
- Basit komutları takip etme
- Grup aktivitelerine katılım

### 10-12 Yaş Grubu
- Daha karmaşık tekniklerin öğrenilmesi
- Problem çözme becerilerinin gelişimi
- Liderlik rolü alma

## Ebeveynler İçin Tavsiyeler

### Doğru Beklentiler
- Çocuğunuzun gelişim hızına saygı gösterin
- Sabırlı olun ve süreçten zevk almasını sağlayın
- Ev'de antrenman yapmaya teşvik edin

### Destek Olma Yolları
- Antrenman saatlerine düzenli katılımı sağlayın
- Çocuğunuzun başarılarını takdir edin
- Eğitmenlerle iletişim halinde olun

## Güvenli Öğrenme Ortamı

İzmir Wing Chun'da çocuklar için:
- **Yaş gruplarına özel** programlar
- **Deneyimli çocuk eğitmenleri**
- **Güvenli antrenman ortamı**
- **Eğlenceli öğrenme metodları**

## Sonuç

Wing Chun, çocukların hem fiziksel hem de mental gelişimine katkıda bulunan harika bir aktivitedir. Doğru yaklaşımla öğretildiğinde, çocuklar yaşam boyu sürecek değerli beceriler kazanırlar.

Çocuğunuzun Wing Chun yolculuğuna başlaması için bizimle iletişime geçebilirsiniz. İlk ders ücretsiz!
    `,
    author: 'Ayşe Can',
    publishDate: '2024-01-10',
    category: 'Çocuk Eğitimi',
    image: 'https://images.pexels.com/photos/8611192/pexels-photo-8611192.jpeg',
    tags: ['Çocuk', 'Gelişim', 'Ebeveyn', 'Faydalar'],
    readTime: 6
  },
  {
    id: '3',
    slug: 'chi-sao-yapışkan-eller-tekniği',
    title: 'Chi Sao: Wing Chun\'un Kalbi "Yapışkan Eller" Tekniği',
    excerpt: 'Wing Chun\'un en önemli egzersizi Chi Sao\'nun detaylı analizi ve bu tekniğin Wing Chun eğitimindeki yeri.',
    content: `
# Chi Sao: Wing Chun'un Kalbi

Chi Sao (黏手), Wing Chun kung fuunun en karakteristik ve önemli egzersizlerinden biridir. "Yapışkan Eller" olarak da bilinen bu teknik, Wing Chun'un kalbini oluşturur ve bu sanatı diğer dövüş sanatlarından ayıran en önemli özelliklerden biridir.

## Chi Sao Nedir?

Chi Sao, iki kişinin el ve kollarını temas halinde tutarak yaptığı bir duyarlılık egzersizi ve sparring tekniğidir. Bu egzersizde amaç, fiziksel güce değil, duyarlılığa, timing'e ve tekniğe dayanmaktır.

### Chi Sao'nun Temel Prensipleri

1. **Sürekli Temas**: Eller sürekli temas halinde kalır
2. **Duyarlılık**: Rakibin hareketlerini his yoluyla algılama
3. **Relaxation**: Gergin olmadan rahat kalma
4. **Forward Intent**: İleriye yönelik niyet

## Chi Sao'nun Faydaları

### Teknik Faydalar
- **Refleks Geliştirme**: Ani tepki verme yeteneği gelişir
- **Timing**: Doğru zamanlama becerisi artar
- **Duyarlılık**: Dokunma duyusu gelişir
- **Koordinasyon**: El-göz koordinasyonu iyileşir

### Mental Faydalar
- **Konsantrasyon**: Yoğun dikkat gerektiren bir aktivitedir
- **Sakinlik**: Baskı altında sakin kalma becerisini geliştirir
- **Sezgi**: Rakibin niyetlerini hissetme yeteneği artar

## Chi Sao'nun Aşamaları

### Temel Seviye: Single Chi Sao
İlk aşamada tek el ile yapılan basit hareketler:
- **Pak Sao - Tan Sao** döngüsü
- **Temel rytim** kavrama
- **Merkez çizgi** farkındalığı

### Orta Seviye: Double Chi Sao
İki el ile yapılan daha karmaşık hareketler:
- **Fook Sao - Wu Sao** kombinasyonu
- **Bong Sao - Tan Sao** döngüleri
- **Lap Sao** (çekme teknikleri)

### İleri Seviye: Flow Chi Sao
Serbest akışlı Chi Sao:
- **Spontane** hareketler
- **Trap** (yakalama) teknikleri
- **Strike** entegrasyonu

## Chi Sao Egzersizleri

### Temel Egzersizler

#### 1. Pak Sao - Tan Sao Döngüsü
Bu temel egzersiz Chi Sao'nun temelini oluşturur:
- Rytim tutmayı öğretir
- Merkez çizgi farkındalığı geliştirir
- Temel el pozisyonlarını pekiştirir

#### 2. Bong Sao - Tan Sao Döngüsü
Daha ileri seviye egzersiz:
- Yön değiştirme becerisi gelişir
- Esneklik artar
- Üst seviye tekniklere hazırlık

### İleri Egzersizler

#### 1. Dan Chi Sao
Tek el Chi Sao egzersizi:
- Temel prensipleri pekiştirir
- Yeni başlayanlar için idealdir
- Dikkat dağılımını önler

#### 2. Luk Dim Boon Chi Sao
Altı nokta ve yarım Chi Sao:
- Karmaşık kombinasyonlar
- Yüksek seviye teknikler
- Gerçek dövüşe yakın simülasyon

## Chi Sao'da Sık Yapılan Hatalar

### Teknik Hatalar
1. **Gerginlik**: Kasların gergin tutulması
2. **Güç Kullanımı**: Teknik yerine güce dayandırma
3. **Rytim Kaybı**: Doğal akışı bozma
4. **Merkez Çizgi**: Merkez çizgi farkındalığını kaybetme

### Mental Hatalar
1. **Aceleci Davranma**: Sabırsızlık ve acele etme
2. **Ego**: Kazanma hırsı güdüsü
3. **Dikkat Dağınıklığı**: Konsantrasyon kaybı

## Chi Sao'yu Geliştirme Yolları

### Bireysel Çalışma
- **Mirror work**: Aynada tek başına çalışma
- **Shadow Chi Sao**: Hayali partner ile çalışma
- **Form practice**: Chi Sao hareketlerini form olarak çalışma

### Partner Çalışması
- **Düzenli partner**: Aynı partner ile sürekli çalışma
- **Farklı partnerler**: Değişik stil ve yaklaşımları deneyimleme
- **Seviye farkı**: Hem kendinden üst hem alt seviyede partnerlerle çalışma

## Chi Sao'nun Gerçek Dövüşteki Uygulaması

Chi Sao sadece bir egzersiz değil, gerçek dövüş durumlarında kullanılan bir tekniktir:

### Savunma Uygulamaları
- **Yumruk savunması**: Gelen yumrukları neutralize etme
- **Kavrama savunması**: Kavranma girişimlerini etkisiz hale getirme
- **İtme savunması**: İtme girişimlerini yönlendirme

### Saldırı Uygulamaları
- **Counter attack**: Savunma ile eş zamanlı karşı saldırı
- **Trap and hit**: Yakalama ve vurma
- **Flow to strike**: Akış içinde darbe bulma

## Chi Sao Öğrenme Süreci

### 1-6. Ay: Temel Seviye
- Temel pozisyonları öğrenme
- Rytim kavrama
- Partner ile uyum sağlama

### 7-12. Ay: Orta Seviye
- Farklı döngüleri öğrenme
- Duyarlılığın gelişimi
- Temel trap teknikleri

### 1-2. Yıl: İleri Seviye
- Serbest akış Chi Sao
- Gerçek uygulamalara geçiş
- Öğretme yeteneği kazanma

## Sonuç

Chi Sao, Wing Chun'un en değerli hazinelerinden biridir. Bu tekniği doğru öğrenmek ve uygulamak, Wing Chun sanatında ustalaşmak için elzemdir. Sabır, düzenli antrenman ve doğru rehberlik ile Chi Sao'da ustalaşmak mümkündür.

İzmir Wing Chun'da Chi Sao'yu deneyimli eğitmenlerimizle öğrenebilir ve bu eşsiz tekniğin inceliklerini keşfedebilirsiniz.
    `,
    author: 'Sifu Ali Demir',
    publishDate: '2024-01-05',
    category: 'Teknikler',
    image: 'https://images.pexels.com/photos/7991322/pexels-photo-7991322.jpeg',
    tags: ['Chi Sao', 'Teknik', 'İleri Seviye', 'Sparring'],
    readTime: 10
  },
  {
    id: '4',
    slug: 'wing-chun-felsefesi-yaşam-sanati',
    title: 'Wing Chun Felsefesi: Bir Yaşam Sanatı',
    excerpt: 'Wing Chun\'un sadece bir dövüş sanatı olmadığı, aynı zamanda bir yaşam felsefesi olduğu konusunda detaylı bir inceleme.',
    content: `
# Wing Chun Felsefesi: Bir Yaşam Sanatı

Wing Chun, sadece fiziksel tekniklerin öğrenildiği bir dövüş sanatı değildir. Aynı zamanda derin bir felsefeye sahip olan ve bu felsefenin yaşamın her alanında uygulanabildiği bir yaşam sanatıdır. Bu yazıda Wing Chun'un felsefi yönlerini ve bunların günlük hayatta nasıl uygulanabileceğini inceleyeceğiz.

## Wing Chun'un Temel Felsefi Prensipleri

### 1. Basitlik (Simplicity)
Wing Chun'un en temel prensibi basitliktir. Karmaşık hareketler yerine simple ve direkt olanı tercih eder.

**Yaşamdaki Uygulaması:**
- Problem çözümde en basit yolu aramak
- Gereksiz karmaşıklıklardan kaçınmak
- Net ve anlaşılır iletişim kurmak

### 2. Directness (Doğrudanlık)
Wing Chun, hedefe ulaşmak için en kısa yolu kullanmayı öğretir.

**Yaşamdaki Uygulaması:**
- Hedeflere odaklanmak
- Zaman kaybından kaçınmak
- Açık ve dürüst olmak

### 3. Economy of Motion (Hareket Ekonomisi)
Minimum enerji ile maximum etki yaratmayı amaçlar.

**Yaşamdaki Uygulaması:**
- Verimlilik odaklı çalışmak
- Enerjini doğru alanlara yönlendirmek
- Gereksiz aktivitelerden kaçınmak

## Merkez Çizgi Teorisinin Yaşam Felsefesi

### Fiziksel Merkez
Wing Chun'da merkez çizgi, vücudun merkezindeki hayali çizgidir ve hem korunması gereken hem de saldırıda kullanılacak alandır.

### Mental ve Ruhsal Merkez
Bu konsept yaşamda da geçerlidir:
- **İç denge** korumak
- **Değerlerin merkezi** olmak
- **Kararlılık** göstermek

### Sosyal Merkez
İlişkilerde de merkez çizgi teorisi uygulanabilir:
- Kişisel sınırları korumak
- Dengeli ilişkiler kurmak
- Kendini kaybedeymeden başkalarıyla etkileşim

## Wu Wei (Eylemsizlik) Prensibi

Wu Wei, Taoizm'den gelen ve Wing Chun'da da bulunan "zorlamama" prensibidir.

### Fiziksel Uygulama
- Güçle karşı koymak yerine yönlendirmek
- Akışa uyum sağlamak
- Minimum effort ile maximum result

### Yaşamdaki Uygulaması
- Kontrol edemediğin şeyleri kabul etmek
- Doğal akışa uyum sağlamak
- Zorlamak yerine fırsatları beklemek

## Simultaneous Attack and Defense

Wing Chun'da savunma ve saldırı eş zamanlı yapılır. Bu prensip yaşamda da geçerlidir.

### İş Hayatında
- Problemleri çözerken aynı zamanda fırsatları değerlendirmek
- Rakipleri etkisiz hale getirirken kendi pozisyonunu güçlendirmek

### İlişkilerde
- Kendini korurken aynı zamanda yapıcı olmak
- Sınır çizerken empati göstermek

## Sensitivity Development (Duyarlılık Geliştirme)

Chi Sao'dan öğrenilen duyarlılık, yaşamın birçok alanında uygulanabilir.

### Sosyal Duyarlılık
- İnsanların duygusal durumlarını hissetmek
- Grupsal dinamikleri algılamak
- Zamanlamayı doğru yapmak

### İş Hayatında Duyarlılık
- Pazar dinamiklerini hissetmek
- Takım arkadaşlarının ihtiyaçlarını anlamak
- Değişimleri önceden sezmek

## Centerline in Decision Making

Merkez çizgi konsepti karar vermede de kullanılabilir.

### Karar Verme Süreci
1. **Merkezi belirleme**: Temel değerlerin ne olduğunu bilmek
2. **Seçenekleri değerlendirme**: Her seçeneğin merkeze ne kadar uygun olduğunu kontrol etmek
3. **Action**: En uygun seçeneği implement etmek

## Relaxation in Tension

Wing Chun, gerginlik içinde bile relaxed kalmayı öğretir.

### Stres Yönetimi
- Baskı altında bile sakin kalabilmek
- Panik yerine kontrollü hareket etmek
- Mental berraklığı korumak

### İş Hayatında Uygulama
- Deadline'lar altında bile kaliteli çalışmak
- Kriz durumlarında liderlik yapabilmek
- Çok görevlilikte (multitasking) odağı kaybetmemek

## Structure and Flow Balance

Wing Chun'da yapı (structure) ve akış (flow) dengesini korumak önemlidir.

### Yaşam Dengesi
- **Structure**: Rutinler, kurallar, disiplin
- **Flow**: Esneklik, yaratıcılık, adaptasyon

### İş-Yaşam Dengesi
- Planlı olmak ama esnek kalabilmek
- Disiplinli olmak ama spontane olabilmek

## Non-Intention Intention

Wing Chun'da "niyetsiz niyet" paradoksu vardır. Bu, belli bir tekniği uygulama niyeti olmadan ama aynı zamanda hazır olma halindeki zihinsel durumdur.

### Yaşamda Uygulama
- Belli bir sonuca odaklanmadan ama hazır olmak
- Plan yapmak ama sonuca bağlanmamak
- Effort yapmak ama outcome'u kontrol etmeye çalışmamak

## Wing Chun'un Ahlaki Boyutu

### Martial Ethics (Savaş Ahlakı)
Wing Chun öğretileri etik davranış kuralları da içerir:
- Gücü kötüye kullanmamak
- Sadece self-defense için kullanmak
- Humility (alçakgönüllülük) göstermek

### Sosyal Sorumluluk
- Topluma faydalı olmak
- Zayıfları korumak
- Bilgini paylaşmak

## Modern Yaşamda Wing Chun Felsefesini Uygulamak

### Günlük Rutinlerde
- **Sabah meditasyonu**: Merkezi bulma
- **Mindful walking**: Present moment awareness
- **Conflict resolution**: Wing Chun prensiplerini kullanma

### İş Yaşamında
- **Meeting'lerde**: Centerline principle ile odaklanmak
- **Negotiations**: Soft power kullanmak
- **Leadership**: Wu Wei prensibi ile yönlendirmek

### İlişkilerde
- **Communication**: Direct ama respectful olmak
- **Boundaries**: Merkez çizgini korumak
- **Empathy**: Sensitivity develop etmek

## Sonuç: Wing Chun Yaşam Tarzı

Wing Chun felsefesi, tüm yaşam alanlarında uygulanabilecek evrensel prensipler sunar. Bu felsefe:

- **Basitliği** tercih etmeyi
- **Dengeyi** korumayı
- **Verimliliği** artırmayı
- **İç huzuru** bulmayı öğretir

Wing Chun sadece dövüşmeyi öğreten bir sanat değil, yaşamı daha bilinçli ve etkili şekilde yaşamayı öğreten bir felsefedir. İzmir Wing Chun'da bu felsefeyi deneyimleyebilir ve yaşamınızın bir parçası haline getirebilirsiniz.
    `,
    author: 'Sifu Ali Demir',
    publishDate: '2023-12-28',
    category: 'Felsefe',
    image: 'https://images.pexels.com/photos/8611543/pexels-photo-8611543.jpeg',
    tags: ['Felsefe', 'Yaşam', 'Mental Gelişim', 'Denge'],
    readTime: 12
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'Tümü') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return ['Tümü', ...Array.from(new Set(categories))];
};