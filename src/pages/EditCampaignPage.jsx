import { useParams, useNavigate } from "react-router-dom";
import CampaignForm from "../components/CampaignForm";

const EditCampaignPage = ({ campaigns, towns, keywords, minBidAmount, onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const campaign = campaigns.find(c => String(c.id) === String(id));
  if (!campaign) {
    return <div style={{ color: "red" }}>Campaign not found.</div>;
  }

  const handleEdit = (values, helpers) => {
    onSubmit({ ...values, id: campaign.id }, helpers);
    navigate("/campaigns");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 32 }}>
      <h2>Edit Campaign</h2>
      <CampaignForm
        initialValues={campaign}
        towns={towns}
        keywordsList={keywords}
        minBidAmount={minBidAmount}
        onSubmit={handleEdit}
        onCancel={() => navigate("/campaigns")}
      />
    </div>
  );
};

export default EditCampaignPage;
