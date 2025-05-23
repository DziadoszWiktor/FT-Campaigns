import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import CampaignsPage from './pages/CampaignsPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import CampaignDetailPage from './pages/CampaignDetailPage';


const LS_KEY = "campaigns_ft_storage";

function App() {
  const towns = ["Warszawa", "Kraków", "Gdańsk", "Poznań"];
  const keywords = ["sport", "lato", "zima", "moda", "buty", "sneakers"];
  const minBidAmount = 1;
  const [campaigns, setCampaigns] = useState([]);

  // Wczytaj z localStorage na start
  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) setCampaigns(JSON.parse(stored));
  }, []);

  // Zapisuj do localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(campaigns));
  }, [campaigns]);

  // Dodaj unikalne id
  const handleSubmitCampaign = (campaignData, { resetForm }) => {
    const id = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    setCampaigns(prev => [...prev, { ...campaignData, id }]);
    console.log("Dodano kampanię:", { ...campaignData, id });
    resetForm(); // czyści formularz!
  };

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path="/campaigns"
          element={<CampaignsPage campaigns={campaigns} />}
        />
        <Route
          path="/create"
          element={
            <CreateCampaignPage
              towns={towns}
              keywords={keywords}
              minBidAmount={minBidAmount}
              onSubmit={handleSubmitCampaign}
            />
          }
        />
        <Route path="/campaigns/:id" element={<CampaignDetailPage campaigns={campaigns} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<CampaignsPage campaigns={campaigns} />} />
      </Routes>
    </div>
  );
}

export default App;
