import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import CampaignsPage from './pages/CampaignsPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import EditCampaignPage from './pages/EditCampaignPage';
import CampaignDetailPage from './pages/CampaignDetailPage';

import towns from './data/towns';
import keywords from './data/keywords';

const LS_KEY = "campaigns_ft_storage";
const BALANCE_KEY = "emerald_balance_ft";

function App() {
  const minBidAmount = 1;
  const [campaigns, setCampaigns] = useState([]);
  const [emeraldBalance, setEmeraldBalance] = useState(5000);

  // Load campaigns & balance from storage
  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) setCampaigns(JSON.parse(stored));
    const bal = localStorage.getItem(BALANCE_KEY);
    if (bal) setEmeraldBalance(Number(bal));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(campaigns));
  }, [campaigns]);
  useEffect(() => {
    localStorage.setItem(BALANCE_KEY, emeraldBalance);
  }, [emeraldBalance]);

  // Create campaign (deduct fund)
  const handleSubmitCampaign = (campaignData, { resetForm, setFieldError }) => {
    const fund = Number(campaignData.fund);
    if (fund > emeraldBalance) {
      setFieldError("fund", "Not enough Emeralds!");
      return;
    }
    const id = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    setCampaigns(prev => [...prev, { ...campaignData, id }]);
    setEmeraldBalance(prev => prev - fund);
    resetForm();
  };

  // Edit campaign (adjust fund)
  const handleEditCampaign = (editedCampaign, { resetForm }) => {
    setCampaigns(prev => {
      const prevCamp = prev.find(c => c.id === editedCampaign.id);
      // Zwróć stary fund, zabierz nowy fund
      let nextBalance = emeraldBalance + Number(prevCamp.fund) - Number(editedCampaign.fund);
      setEmeraldBalance(nextBalance);
      return prev.map(camp => camp.id === editedCampaign.id ? { ...editedCampaign } : camp);
    });
    resetForm();
  };

  // Delete campaign (refund fund)
  const handleDeleteCampaign = (id) => {
    setCampaigns(prev => {
      const camp = prev.find(c => c.id === id);
      if (camp) setEmeraldBalance(bal => bal + Number(camp.fund));
      return prev.filter(camp => camp.id !== id);
    });
  };

  return (
    <div className='App'>
      <Navbar emeraldBalance={emeraldBalance} />
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
