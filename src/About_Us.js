import React from 'react';
import './About_Us.css'; 
import Deondre_pic from './HeadshotPic.png';
import Keaton_pic from './Keaton_picture.png';


const teamMembers = [
  { id: 1, name: 'Keaton Rohlfs', bio: 'This is a short bio for Member 1.', imgSrc: Keaton_pic },
  { id: 2, name: 'Deondre North', bio: 'This is a short bio for Member 2.', imgSrc: Deondre_pic },
  { id: 3, name: 'Michael Reis', bio: 'This is a short bio for Member 3.', imgSrc: '/path/to/image3.jpg' },
  { id: 4, name: 'Joe Zimmerman', bio: 'This is a short bio for Member 4.', imgSrc: '/path/to/image4.jpg' },
  { id: 5, name: 'Cole Sullivan', bio: 'This is a short bio for Member 5.', imgSrc: '/path/to/image5.jpg' }
];

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <img src={member.imgSrc} alt={`Profile of ${member.name}`} className="member-img" />
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
