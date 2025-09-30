import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ChildCourseDetails from './pages/ChildCourseDetails';
import TeenCourseDetails from './pages/TeenCourseDetails';
import AdultCourseDetails from './pages/AdultCourseDetails';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/kurslar" element={<CoursesPage />} />
              <Route path="/kurslar/cocuk-grubu" element={<ChildCourseDetails />} />
              <Route path="/kurslar/genc-grubu" element={<TeenCourseDetails />} />
              <Route path="/kurslar/yetiskin-grubu" element={<AdultCourseDetails />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/galeri" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;