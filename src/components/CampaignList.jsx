import { Link } from "react-router-dom";

const CampaignList = ({ campaigns, onDelete }) => {
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
          <Link
            to={`/edit/${camp.id}`}
            style={{
              marginLeft: 16,
              color: "#265bb6",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Edit
          </Link>
          <button
            style={{
              marginLeft: 8,
              color: "#a21c1c",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
            }}
            onClick={() => onDelete && onDelete(camp.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
