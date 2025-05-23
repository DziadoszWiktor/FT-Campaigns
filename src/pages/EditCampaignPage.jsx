import { useParams, useNavigate } from "react-router-dom";
import CampaignForm from "../components/CampaignForm";

const EditCampaignPage = ({ campaigns, onSubmit, towns, keywords, minBidAmount }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const campaign = campaigns.find(c => c.id === id);

  if (!campaign) return <div>Campaign not found</div>;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 32 }}>
      <h1>Edit Campaign</h1>
      <CampaignForm
        initialValues={campaign}
        onSubmit={(data, helpers) => {
          onSubmit({ ...data, id }, helpers);
          navigate("/campaigns");
        }}
        towns={towns}
        keywordsList={keywords}
        minBidAmount={minBidAmount}
        editMode
      />
    </div>
  );
};

export default EditCampaignPage;
