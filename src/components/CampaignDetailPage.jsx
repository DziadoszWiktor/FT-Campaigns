const CampaignDetail = ({ camp, onBack }) => {
  if (!camp) return null;

  return (
    <div>
      <h2>{camp.name}</h2>
      <div>Status: {camp.status === true || camp.status === "on" ? "ON" : "OFF"}</div>
      <div>Bid: {camp.bid}</div>
      <div>Fund: {camp.fund}</div>
      <div>Town: {camp.town}</div>
      <div>Radius: {camp.radius} km</div>
      <div>Keywords: {Array.isArray(camp.keywords) ? camp.keywords.join(", ") : ""}</div>
      {onBack && (
        <button onClick={onBack} style={{ marginTop: 24 }}>
          Powrót
        </button>
      )}
    </div>
  );
};

export default CampaignDetail;
