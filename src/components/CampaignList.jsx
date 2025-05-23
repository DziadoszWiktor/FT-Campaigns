import { Link } from "react-router-dom";

const CampaignList = ({ campaigns }) => {
  if (!campaigns.length) return <div>No campaigns yet.</div>;

  return (
    <div>
      {campaigns.map((camp) => (
        <div key={camp.id} style={{ marginBottom: 16 }}>
          <Link to={`/campaigns/${camp.id}`} style={{ fontWeight: "bold", fontSize: 18 }}>
            {camp.name}
          </Link>{" "}
          <span style={{ color: camp.status === true || camp.status === "on" ? "green" : "red" }}>
            {(camp.status === true || camp.status === "on" ? "ON" : "OFF")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;

