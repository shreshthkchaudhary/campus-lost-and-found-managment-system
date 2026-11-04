import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RecentItems from './components/RecentItems';
import BrowseItems from './components/BrowseItems';
import ReportForm from './components/ReportForm';
import AboutSection from './components/AboutSection';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { ItemsProvider } from './context/ItemsContext';
import { AuthProvider, useAuth } from './context/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  // Make sure they are an admin
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
}

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <RecentItems />
    </>
  );
}

function AppContent() {
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdmin && <TopBar />}
      {!isAdmin && <Navbar onLoginClick={() => setLoginOpen(true)} />}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowseItems />} />
          <Route path="/report-lost" element={<ReportForm type="lost" />} />
          <Route path="/report-found" element={<ReportForm type="found" />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>

      {!isAdmin && <Footer />}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ItemsProvider>
          <AppContent />
        </ItemsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
