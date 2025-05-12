/**
 * @copyright Copyright (c) 2025 Lazar Demin
 * @license MIT
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import WordCounter from './pages/WordCounter';
import TextDiff from './pages/TextDiff';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<TextDiff />} />
            <Route path="/text-diff" element={<TextDiff />} />
            <Route path="/word-counter" element={<WordCounter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
