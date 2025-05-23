import { useParams, useNavigate } from "react-router-dom";

const CampaignDetailPage = ({ campaigns }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof campaigns === "undefined") {
    return <div>Ładowanie danych o kampaniach...</div>;
  }

  if (Array.isArray(campaigns) && campaigns.length === 0) {
    return <div>Brak utworzonych kampanii.</div>;
  }

  const camp = campaigns.find(c => String(c.id) === String(id));
  if (!camp) {
    return <div style={{ color: "red" }}>Kampania o podanym ID nie istnieje.</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 32 }}>
      <h2>{camp.name}</h2>
      <div>Status: {camp.status === true || camp.status === "on" ? "ON" : "OFF"}</div>
      <div>Bid: {camp.bid}</div>
      <div>Fund: {camp.fund}</div>
      <div>Town: {camp.town}</div>
      <div>Radius: {camp.radius} km</div>
      <div>Keywords: {camp.keywords?.join(", ")}</div>
      <button onClick={() => navigate(-1)} style={{ marginTop: 24 }}>Powrót</button>
    </div>
  );
};

export default CampaignDetailPage;
