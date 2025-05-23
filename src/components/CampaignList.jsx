import { Link, useNavigate } from "react-router-dom";

const CampaignList = ({ campaigns, onDelete }) => {
  const navigate = useNavigate();

  if (!campaigns.length) return <div>No campaigns yet.</div>;

  return (
    <div>
      {campaigns.map((camp) => (
        <div key={camp.id} style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
          <Link to={`/campaigns/${camp.id}`} style={{ fontWeight: "bold", fontSize: 18 }}>
            {camp.name}
          </Link>
          <span style={{ color: camp.status === true || camp.status === "on" ? "green" : "red" }}>
            {(camp.status === true || camp.status === "on" ? "ON" : "OFF")}
          </span>
          <button
            style={{ marginLeft: 10 }}
            onClick={() => navigate(`/edit/${camp.id}`)}
          >
            Edit
          </button>
          <button
            style={{ marginLeft: 4 }}
            onClick={() => onDelete(camp.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
