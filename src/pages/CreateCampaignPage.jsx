import CampaignForm from "../components/CampaignForm";

const CreateCampaignPage = ({ towns, keywords, minBidAmount, onSubmit }) => (
  <div>
    <CampaignForm
      towns={towns}
      keywordsList={keywords}
      minBidAmount={minBidAmount}
      onSubmit={onSubmit}
    />
  </div>
);

export default CreateCampaignPage;

