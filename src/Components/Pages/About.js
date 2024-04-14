import SiteAppNav from '../Common/SiteAppNav';
import SiteFooter from '../Common/SiteFooter';
import '../../App.css';
import React from 'react';

export default function About() {
  return (
    <div>
      <SiteAppNav />
      <div className='app-about-container'>
        

        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Goodwillify, our mission is to empower individuals and organizations to make a difference in their communities. We're committed to providing a user-friendly platform where volunteers can easily find and engage in volunteer projects that align with their interests and values. By facilitating connections and promoting collaboration, we aim to amplify the impact of goodwill efforts worldwide.
            </p>
          </div>
          <div className="about-section">
            <h2>How it Works</h2>
            <p>
              Goodwillify simplifies the volunteering process by offering a comprehensive platform for both volunteers and organizations. Volunteers can create profiles, browse through a variety of volunteer opportunities, and easily sign up for projects that match their availability and interests. Organizations can post volunteer opportunities, manage applications, and track volunteer engagement, making it easier than ever to recruit and coordinate volunteers for their projects.
            </p>
          </div>
          <div className="about-section">
            <h2>Join the Goodwillify Community</h2>
            <p>
              Ready to make a difference? Join the Goodwillify community today and start giving back in a meaningful way. Whether you're passionate about environmental conservation, social justice, or community development, there's a volunteer opportunity waiting for you on Goodwillify. Together, we can create a better world, one act of goodwill at a time.
            </p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
