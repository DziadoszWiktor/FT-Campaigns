import CampaignList from "../components/CampaignList";

const CampaignsPage = ({ campaigns, onDelete }) => (
  <div style={{ maxWidth: 600, margin: "0 auto", padding: 32 }}>
    <h1>Campaigns</h1>
    <CampaignList campaigns={campaigns} onDelete={onDelete} />
  </div>
);

export default CampaignsPage;
