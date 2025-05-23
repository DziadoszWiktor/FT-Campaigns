import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./AboutPage.css"; // import your CSS

const AboutPage = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/FT-Campaigns/README.md")
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);

  return (
    <div style={{ minHeight: "70vh", background: "#f9f9f9", padding: "2vw 0" }}>
      <div className="about-markdown-wrapper">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AboutPage;
