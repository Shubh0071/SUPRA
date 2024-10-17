import React from 'react';
import './Team.css';


const Team = () => {
  const members = [
    { name: "Ansh Shukla", role: "Team Captain" },
    { name: "Ashutosh Pandey", role: "Vice-Captain" },
    { name: "Vaibhav Pandey", role: "Treasurer" },
    { name: "Prashant Kumar", role: "Designing Head"},
    { name: "Saumya Upadhyay", role:"Power Train Head"},
    { name: "Shweta Singh", role:"Suspension Head"},
    { name: "Nishita Tripathi",role:"Disco Head"},
    { name: "Ankit Shukla",role:"Technical Head"},
    { name: "Aman Singh",role:"Static Head"},
    { name: "Alok Yadav",role:"Steering Head"},
    { name: "Devesh Nishad",role:"Braking Head"},
  ];

  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-member">
            <img src={`/images/member${index + 1}.jpg`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
