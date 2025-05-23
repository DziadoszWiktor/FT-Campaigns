import { Link } from "react-router-dom";
import campaignImg from "../assets/campaign.png";
import "./CampaignList.css";

const CampaignList = ({ campaigns, onDelete }) => {
  if (!campaigns.length) return <div className="no-campaigns">No campaigns yet.</div>;

  return (
    <div className="campaign-list">
      {campaigns.map((camp) => (
        <div className="campaign-card" key={camp.id}>
          <div className="campaign-card__main">
            <div className="campaign-card__image">
              <img
                src={camp.image || campaignImg}
                alt={camp.name}
                onError={e => { e.target.onerror = null; e.target.src = campaignImg; }}
              />
            </div>
            <div className="campaign-card__info">
              <Link className="campaign-card__title" to={`/campaigns/${camp.id}`}>
                {camp.name}
              </Link>
              {/* You can add short product/keywords here if wanted */}
            </div>
            <div
              className={`campaign-card__status${camp.status === true || camp.status === "on" ? " on" : " off"}`}
            >
              {camp.status === true || camp.status === "on" ? "ON" : "OFF"}
            </div>
            <div className="campaign-card__actions">
              <Link className="emerald-btn" to={`/edit/${camp.id}`}>Edit</Link>
              <button className="emerald-btn delete" onClick={() => onDelete && onDelete(camp.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
