import React from 'react';
import './About_Us.css'; 
import Deondre_pic from './HeadshotPic.png';
import Keaton_pic from './Keaton_picture.png';
import Cole_pic from './Cole_picture.png';
import Joe_pic from './Joe_picture.png';
import Michael_pic from './Michael_picture.png';

const teamMembers = [
  { id: 1, name: 'Keaton Rohlfs', HomeTown: 'Huntsville, Alabama', imgSrc: Keaton_pic },
  { id: 2, name: 'Deondre North', HomeTown: 'Monroeville, Alabama', imgSrc: Deondre_pic },
  { id: 3, name: 'Michael Reis', HomeTown: 'Dublin, Ohio', imgSrc: Michael_pic },
  { id: 4, name: 'Joe Zimmerman', HomeTown: 'Chicago, Illinois', imgSrc: Joe_pic },
  { id: 5, name: 'Cole Sullivan', HomeTown: 'Murfreesboro, Tennessee', imgSrc: Cole_pic }
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
            {/* Static label "Hometown:" with only the word "Hometown" wrapped in a span for styling */}
            <p><span className="label">Hometown:</span> {member.HomeTown}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
