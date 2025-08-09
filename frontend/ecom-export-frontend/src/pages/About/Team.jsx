import React from 'react';
import styles from './Team.module.css';

const teamMembers = [
  { name: "Aditya Mehra", role: "Founder & CEO" },
  { name: "Neha Suresh", role: "Operations Head" },
  { name: "Ravi Kumar", role: "Export Manager" },
  { name: "Anjali Nair", role: "Quality & Compliance" },
];

const Team = () => {
  return (
    <section className={styles.section}>
      <h2>Our Team</h2>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div className={styles.card} key={index}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
