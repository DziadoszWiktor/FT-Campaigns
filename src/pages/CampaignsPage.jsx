import CampaignList from "../components/CampaignList";

const CampaignsPage = ({ campaigns }) => (
  <div style={{ maxWidth: 600, margin: "0 auto", padding: 32 }}>
    <h1>Campaigns</h1>
    <CampaignList campaigns={campaigns} />
  </div>
);

export default CampaignsPage;
