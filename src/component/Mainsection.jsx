import React from 'react';
import './Mainsection.scss';
import phoneImage from "../images/illustration-phones.svg";
import laptopImage from "../images/illustration-laptop-desktop.svg";
import deskImage from "../images/illustration-editor-desktop.svg";

const Mainsection = () => {
  return (
    <div className="mainsection">
      <div className="section-header">
        <h2>Designed for the future</h2>
      </div>

      {/* 1st section of main section */}
      <div className="feature feature-reverse">
        <div className="feature-content">
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <div className="feature">
        <div className="feature-content">
          <h3>Robust content management</h3>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
      </div>
        </div>
       
        <div className="feature-image">
          <img src={deskImage} alt="Editor" />
        </div>
      </div>

      

      {/* 2nd section of main section */}
      <div className="section-dark">
        <div className="feature feature-dark-align">
          <div className="feature-image">
            <img className='phone' src={phoneImage} alt="Phones" />
          </div>
          <div className="feature-content">
            <h3>State of the Art Infrastructure</h3>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping your
              site competitive.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd section of main section */}
      <div className="feature">
        <div className="feature-content">
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <div className="feature">
        <div className="feature-content">
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
        </div>
        <div className="feature-image">
          <img src={laptopImage} alt="Free Open Simple" />
        </div>
      </div>

      
    </div>
  );
};

export default Mainsection;
