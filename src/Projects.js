import React, { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Networking");

  const renderProjects = () => {
    switch (activeTab) {
      case "Networking":
        return <p>Networking-related projects will be listed here.</p>;
      case "Software Development":
        return <p>Software development-related projects will be listed here.</p>;
      case "Artificial Intelligence":
        return <p>AI-related projects will be listed here.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <button onClick={() => setActiveTab("Networking")}>Networking</button>
        <button onClick={() => setActiveTab("Software Development")}>Software Development</button>
        <button onClick={() => setActiveTab("Artificial Intelligence")}>Artificial Intelligence</button>
      </div>
      <div>{renderProjects()}</div>
    </div>
  );
};

export default Projects;
