import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import CampaignsPage from './pages/CampaignsPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import EditCampaignPage from './pages/EditCampaignPage'; // dodaj ten import!
import CampaignDetailPage from './pages/CampaignDetailPage';

const LS_KEY = "campaigns_ft_storage";

function App() {
  const towns = ["Warszawa", "Kraków", "Gdańsk", "Poznań"];
  const keywords = ["sport", "lato", "zima", "moda", "buty", "sneakers"];
  const minBidAmount = 1;
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) setCampaigns(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(campaigns));
  }, [campaigns]);

  const handleSubmitCampaign = (campaignData, { resetForm }) => {
    const id = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    setCampaigns(prev => [...prev, { ...campaignData, id }]);
    resetForm();
  };

  const handleEditCampaign = (editedCampaign, { resetForm }) => {
    setCampaigns(prev =>
      prev.map(camp =>
        camp.id === editedCampaign.id ? { ...editedCampaign } : camp
      )
    );
    resetForm();
  };

  const handleDeleteCampaign = (id) => {
    setCampaigns(prev => prev.filter(camp => camp.id !== id));
  };

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path="/campaigns"
          element={<CampaignsPage campaigns={campaigns} onDelete={handleDeleteCampaign} />}
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
        <Route
          path="/edit/:id"
          element={
            <EditCampaignPage
              campaigns={campaigns}
              towns={towns}
              keywords={keywords}
              minBidAmount={minBidAmount}
              onSubmit={handleEditCampaign}
            />
          }
        />
        <Route path="/campaigns/:id" element={<CampaignDetailPage campaigns={campaigns} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<CampaignsPage campaigns={campaigns} onDelete={handleDeleteCampaign} />} />
      </Routes>
    </div>
  );
}

export default App;
