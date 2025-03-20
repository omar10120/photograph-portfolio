import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Videos from './pages/Videos';
import GraphicDesign from './pages/GraphicDesign';
import SocialMedia from './pages/SocialMedia';
import PaidAds from './pages/PaidAds';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="photography" element={<Photography />} />
        <Route path="videos" element={<Videos />} />
        <Route path="graphic-design" element={<GraphicDesign />} />
        <Route path="social-media" element={<SocialMedia />} />
        <Route path="paid-ads" element={<PaidAds />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
