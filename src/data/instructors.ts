export interface Instructor {
  id: string;
  name: string;
  title: string;
  titleColor: string;
  image: string;
  shortDescription: string;
  experience: string;
  level: string;
  specialties: string[];
  biography: string[];
  achievements: string[];
  courses: string[];
  philosophy: string;
}

export const instructors: Instructor[] = [
  {
    id: 'kenan-ataman',
    name: 'Sifu Kenan Ataman',
    title: 'Başeğitmen',
    titleColor: 'text-yellow-600',
    image: '/izmir-wing-tsung/images/Sifu-Kenan-Ataman-WTAA-bas-egitmen.webp',
    shortDescription: '15 yıllık Wing Chun deneyimi. Hong Kong\'da eğitim almış, uluslararası sertifikalara sahip.',
    experience: '15+ Yıl Deneyim',
    level: 'Sifu Seviyesi (7. Dan)',
    specialties: [
      'Geleneksel Wing Chun Formu',
      'Chi Sao (Yapışkan Eller)',
      'İleri Seviye Teknikler',
      'Eğitmen Yetiştirme',
      'Wing Chun Felsefesi'
    ],
    biography: [
      'Sifu Kenan Ataman, Wing Chun dünyasında 15 yıllık deneyime sahip bir ustadır. Hong Kong\'da geleneksel Wing Chun eğitimi almış ve bu kadim sanatın inceliklerini öğrenmiştir.',
      '2000 yılında WTAA\'yı kurarak Wing Chun\'u Türkiye\'de yaygınlaştırma misyonunu üstlenmiştir. Şimdiye kadar yüzlerce öğrenci yetiştirmiş ve birçok eğitmen sertifikalandırmıştır.',
      'Uluslararası Wing Chun federasyonlarında aktif rol almakta ve düzenli olarak seminerler düzenlemektedir. Öğretiminde geleneksel değerleri korurken modern pedagoji yöntemlerini harmanlayarak etkili bir eğitim sistemi geliştirmiştir.'
    ],
    achievements: [
      'WTAA Kurucusu (2000)',
      'Uluslararası Wing Chun Federasyonu Üyesi',
      'Hong Kong Wing Chun Sertifikası',
      '7. Dan Sifu Derecesi',
      '50+ Eğitmen Yetiştirildi',
      'Avrupa Wing Chun Şampiyonası Jürisi'
    ],
    courses: [
      'Yetişkin Wing Chun',
      'İleri Seviye Teknikler',
      'Eğitmen Yetiştirme Programı',
      'Wing Chun Felsefesi Seminerleri'
    ],
    philosophy: 'Wing Chun sadece bir dövüş sanatı değil, bir yaşam felsefesidir. Öğrencilerime teknik öğretmenin yanı sıra disiplin, saygı ve öz güven kazandırmaya odaklanırım.'
  },
  {
    id: 'mustafa-cetin',
    name: 'Sifu Mustafa Çetin',
    title: 'Araştırmacı, Komite Üyesi',
    titleColor: 'text-blue-600',
    image: '/izmir-wing-tsung/images/Sifu-Mustafa-Cetin.webp',
    shortDescription: 'Çocuk pedagojisi alanında uzmanlaşmış, 8 yıllık Wing Chun deneyimi.',
    experience: '8+ Yıl Deneyim',
    level: 'Eğitmen Seviyesi (4. Dan)',
    specialties: [
      'Çocuk Wing Chun Eğitimi',
      'Pedagojik Yaklaşımlar',
      'Motivasyon Teknikleri',
      'Sil Lim Tau Formu',
      'Temel Teknikler'
    ],
    biography: [
      'Sifu Mustafa Çetin, çocuk pedagojisi alanındaki uzmanlığını Wing Chun eğitimi ile harmanlayan deneyimli bir eğitmendir. 8 yıllık Wing Chun deneyimi süresince özellikle çocuk eğitimi konusunda kendini geliştirmiştir.',
      'Eğitim fakültesi mezunu olan Mustafa hoca, çocukların gelişim özelliklerini dikkate alarak özel eğitim programları tasarlamıştır. Wing Chun\'u çocuklara oyun ve eğlence ile öğretme konusunda uzmanlaşmıştır.',
      'WTAA bünyesinde araştırmacı ve komite üyesi olarak görev yapmakta, eğitim metodolojileri geliştirme çalışmalarına katkıda bulunmaktadır.'
    ],
    achievements: [
      'Eğitim Fakültesi Mezunu',
      'Çocuk Pedagojisi Uzmanı',
      '4. Dan Wing Chun Eğitmeni',
      'WTAA Araştırma Komitesi Üyesi',
      '100+ Çocuk Öğrenci Yetiştirdi',
      'Çocuk Wing Chun Müfredat Geliştirdi'
    ],
    courses: [
      'Çocuk Wing Chun (6-12 yaş)',
      'Temel Wing Chun Teknikleri',
      'Sil Lim Tau Form Eğitimi',
      'Aile Wing Chun Çalışmaları'
    ],
    philosophy: 'Çocuklara Wing Chun öğretirken sabırlı olmak ve onların dünyasına inmek gerekir. Her çocuk farklıdır ve kendi öğrenme stiline uygun yaklaşım geliştirmek önemlidir.'
  },
  {
    id: 'firat-arikan',
    name: 'Sihing Fırat Arıkan',
    title: 'Ege Bölge Sorumlusu',
    titleColor: 'text-green-600',
    image: '/izmir-wing-tsung/images/Sihing-Firat-Artan-Wing-Chun.webp',
    shortDescription: 'Kendini savunma alanında uzman, 12 yıllık Wing Chun deneyimi.',
    experience: '12+ Yıl Deneyim',
    level: 'Eğitmen Seviyesi (5. Dan)',
    specialties: [
      'Kendini Savunma Teknikleri',
      'Genç Grubu Eğitimi',
      'Pratik Uygulamalar',
      'Chi Sao Çalışmaları',
      'Kondisyon Antrenmanları'
    ],
    biography: [
      'Sihing Fırat Arıkan, 12 yıllık Wing Chun deneyimi ile kendini savunma alanında uzmanlaşmış bir eğitmendir. Ege Bölge Sorumlusu olarak WTAA\'nın bölgedeki faaliyetlerini koordine etmektedir.',
      'Özellikle gençlere yönelik Wing Chun eğitimi konusunda deneyimli olan Fırat hoca, pratik ve etkili kendini savunma tekniklerini öğretme konusunda başarılı bir geçmişe sahiptir.',
      'Wing Chun\'un gerçek hayattaki uygulamalarına odaklanan eğitim anlayışı ile öğrencilerinin hem fiziksel hem de mental olarak güçlenmelerini sağlamaktadır.'
    ],
    achievements: [
      'Ege Bölge Sorumlusu',
      '5. Dan Wing Chun Eğitmeni',
      'Kendini Savunma Uzmanı',
      'Genç Grup Eğitim Sertifikası',
      '200+ Öğrenci Yetiştirdi',
      'Seminer ve Workshop Eğitmeni'
    ],
    courses: [
      'Genç Wing Chun (13-17 yaş)',
      'Kendini Savunma Kursu',
      'Yetişkin Başlangıç Grubu',
      'Chi Sao Çalışmaları'
    ],
    philosophy: 'Wing Chun\'u öğrenmek sadece dövüş teknikleri öğrenmek değil, aynı zamanda karakterini geliştirmek ve öz güveni artırmaktır. Gençlere bu değerleri kazandırmak en büyük hedefimdir.'
  }
];

export const getInstructorById = (id: string): Instructor | undefined => {
  return instructors.find(instructor => instructor.id === id);
};
