import CampaignForm from "../components/CampaignForm";
import products from "../data/products";

const CreateCampaignPage = ({ towns, keywords, minBidAmount, onSubmit }) => (
  <div>
    <CampaignForm
      towns={towns}
      keywordsList={keywords}
      minBidAmount={minBidAmount}
      onSubmit={onSubmit}
      products={products}
    />
  </div>
);

export default CreateCampaignPage;

