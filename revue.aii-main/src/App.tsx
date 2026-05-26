import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import DecisionIntelligence from './components/DecisionIntelligence'
import ChatbotWidget from './components/ChatbotWidget'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <HashRouter>
      <ChatbotWidget />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/app"
          element={
            <div className="min-h-screen bg-dark-blue relative overflow-hidden">
              {/* Grid Pattern Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />
              {/* Radial Gradients for Glow Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <div className="mx-auto w-full max-w-6xl px-4 pt-24 pb-10 flex-1">
                  <DecisionIntelligence />
                </div>
                <Footer />
              </div>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="min-h-screen bg-dark-blue relative overflow-hidden">
              {/* Grid Pattern Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />
              {/* Radial Gradients for Glow Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <Navbar />
                <Login />
                <Footer />
              </div>
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="min-h-screen bg-dark-blue relative overflow-hidden">
              {/* Grid Pattern Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />
              {/* Radial Gradients for Glow Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <Navbar />
                <Signup />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
