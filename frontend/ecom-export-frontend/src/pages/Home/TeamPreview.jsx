import React from 'react';
import './TeamPreview.css';
import team from "../../assets/team.jpg";

const teamMembers = [
  { name: "Aditya Mehra", role: "Founder & CEO", image: team },
  { name: "Neha Suresh", role: "Operations Head", image:team },
  { name: "Ravi Kumar", role: "Export Manager", image:team },
  { name: "Anjali Nair", role: "Quality & Compliance", image: team },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            {member.image && (
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-avatar" 
              />
            )}
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
